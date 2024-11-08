import jwt from 'jsonwebtoken'
import UserRefreshTokenModel from '../models/userRefreshToken.model.js';

const generateTokens = async(user)=>{
    try {
        const payload = {_id: user._id, roles: user.roles}
        
        //generate access token
        const accessTokenExp = Math.floor(Date.now()/1000)+100;
        const accessToken = jwt.sign(
            {...payload, exp: accessTokenExp},
            process.env.JWT_ACCESS_TOKEN_SECRET_KEY, //expires in  100s
        )

        //generate refresh token
        const refreshTokenExp = Math.floor(Date.now()/1000)+60*60*24*5; //expire in 5 days from now
        const refreshToken = jwt.sign(
            {...payload, exp: refreshTokenExp},
            process.env.JWT_REFRESH_TOKEN_SECRET_KEY
        )

        //save new access and refresh token
        await new UserRefreshTokenModel({userId: user._id, token: refreshToken}).save();

        const userRefreshToken = await UserRefreshTokenModel.findOne({userId: user._id});
        if(userRefreshToken){
            userRefreshToken.blacklisted = true;
            await userRefreshToken.save()
        }


        return Promise.resolve({accessToken, refreshToken, accessTokenExp, refreshTokenExp})

    } catch (error) {
        return Promise.reject(error)
    }
}

export default generateTokens
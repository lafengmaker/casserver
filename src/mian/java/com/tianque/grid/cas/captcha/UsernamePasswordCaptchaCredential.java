package com.tianque.grid.cas.captcha;


import org.apereo.cas.authentication.UsernamePasswordCredential;

import javax.validation.constraints.Size;
/**
 * @ClassName: ${NAME}
 * @ProjectName: gridcloud
 * @Description: 新增验证码字段用来传递
 * @author: yeweijun@hztianque.com
 * @date: 2019/5/17 15:59
 */
public class UsernamePasswordCaptchaCredential extends UsernamePasswordCredential {
    /**
     * 验证码
     */
    @Size(min = 5,max = 5, message = "require capcha")
    private String captcha;

    public String getCaptcha() {
        return captcha;
    }

    public void setCaptcha(String captcha) {
        this.captcha = captcha;
    }
}

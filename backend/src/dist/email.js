"use strict";
exports.__esModule = true;
exports.sendEmail = void 0;
var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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');
var sendEmail = function (text) {
    console.log(text);
    var msg = {
        to: 'josephwxlk3r@gmail.com',
        from: 'joewxlk3r@gmail.com',
        subject: 'This email was sent from your portfolio',
        text: 'hello bro',
        html: "<strong>".concat(text, "</strong>")
    };
    sgMail
        .send(msg)
        .then(function () {
        console.log("sending email");
        return true;
    })["catch"](function (error) {
        console.log(error);
        return error;
    });
};
exports.sendEmail = sendEmail;

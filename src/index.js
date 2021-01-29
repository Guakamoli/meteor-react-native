import Meteor from './Meteor.js';
import User from './user/User.js';
import Accounts from './user/Accounts.js';

Object.assign(Meteor, User);

const {
    withTracker, Mongo, packageInterface, ReactiveDict
} = Meteor;

Meteor.loginWithSms = function (phoneNumber, verificationCode, callback) {
    Accounts.callLoginMethod({
        methodArguments: [{
            sms: true,
            phoneNumber,
            verificationCode
        }],
        userCallback: callback
    });
};


Meteor.sendVerificationCode = function (phoneNumber, callback) {
    Meteor.call("accounts-sms.sendVerificationCode", phoneNumber, callback);
};

export { Accounts, withTracker, Mongo, packageInterface, ReactiveDict };
export default Meteor;

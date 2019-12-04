import accountService from './account.service';
import utils from '../utils';
import { accountType } from './account.constants';

export default {
    register(req, res, next) {
        const { email, password } = req.body;

        if (email && password) {
            accountService.create(email, password, accountType.restaurateur)
                .then((account) => {
                    // TEMPORARY SKIP EMAIL VERIFICATION
                    return res.json({
                        data: account.getPublicFields()
                    });

                    const email = {
                        from: '',
                        to: '',
                        subject: 'Account verification',
                        content: `
                            <div>
                                <p>Thank you for registering</p>

                                <p>Click below to activate your account</p>
                                <a href="unicooperation.com/account/activate/${account.id}">Activate</a>
                            </div>
                        `
                    };

                    utils.sendEmail(email.from, email.to, email.subject, email.content)
                        .then(() => {
                            res.json({
                                message: 'Verification email sent'
                            })
                        });
                })
                .catch((error) => next(error));
        } else {
            return next({ message: 'Bad request' });
        }
    },
    login(req, res, next) {
        accountService.login(req, res)
            .then((data) => res.json({ data }))
            .catch((error) => next(error));
    },
    reset(req, res) {
        const { email } = req.body;

        if (email) {
            accountService.get(email)
                .then((account) => {
                    if (!account) {
                        res.json({ message: 'Account not found' });
                    }

                    res.json({ message: 'Method not implemented' });
                });
        } else {
            res
                .status(400)
                .json({ error: 'Email not provided' });
        }
    }
}
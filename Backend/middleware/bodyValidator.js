const { body, validationResult } = require('express-validator');

const registerRules = () =>
    [body('name', 'name is required').notEmpty(),
    body('lastName', 'last name is required').notEmpty(),
    body('email', 'email is not valid').isEmail(),
    body('password', 'the password should contain at least 6 characters').isLength({ min: 6, max: 20 })
    ]

const loginRules = () => [
    body('email', 'email is not valid').isEmail(),
    body('password', 'the password should contain at least 6 characters').isLength({ min: 6, max: 20 })
]

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array().map(err => ({ msg: err.msg })));
    } else {
        next();
    }
}

const AddProductRules = () =>
    [body('Article', 'Article is required').notEmpty(),
    body('Image', 'Image is required').notEmpty(),
    body('Price', 'Price is not valid').notEmpty(),
    body('Description', 'the description should contain at least 6 characters').isLength({ min: 6, max: 40 }),
    body('Category','Category is required').notEmpty()
    ]

module.exports = { registerRules, loginRules, validator ,AddProductRules};

User = require('../models/user.models');
// Handle index actions
exports.index =  (req, res)=> {
    User.get( (err, Data) =>{
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: Data
        });
    });
};
// Handle create contact actions
exports.new =  (req, res)=> {
    var contact = new User();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
// save the contact and check for errors
    contact.save( (err) =>{
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};
// Handle view contact info
exports.view =  (req, res) =>{
    User.findById(req.params.contact_id,  (err, contact) =>{
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};
// Handle update contact info
exports.update =  (req, res) =>{
    User.findById(req.params.contact_id,  (err, userDetail)=> {
        if (err)
            res.send(err);
        userDetail.name = req.body.name ? req.body.name : userDetail.name;
                userDetail.gender = req.body.gender;
                userDetail.email = req.body.email;
                userDetail.phone = req.body.phone;
// save the userDetail and check for errors
        userDetail.save( (err) =>{
            if (err)
                res.json(err);
            res.json({
                message: 'userDetail Info updated',
                data: userDetail
            });
        });
    });
};
// Handle delete contact
exports.delete =  (req, res) =>{
    User.remove({
        _id: req.params.contact_id
    },  (err, contact) =>{
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};
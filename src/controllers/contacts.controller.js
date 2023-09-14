function createContact( req,res ) {
    return res.send({ message: 'createContact handler'});
}

function getContactsByFilter( req, res ) {
let filters = [];
const { favorite, name } = req.query;

if  (favorite =! undefined ){
    filters.push(' favorite = ${( favorite}');
  
}
    if (name){
        filters.push(' name = ${name}');
    }
    return res.send({
        message: 'getContactsByFilter handler with query{
            ${filters.join(', ')}
        }',
        
    });
}

function getContact( req, res ) {
    return res.send({ message: 'getContact handler'});
}
function updateContact( req, res ) {
    return res.send({ message: 'updateContact handler'});
}

function deleteContacts( req, res ) {
    return res.send({ message: 'deleteContact handler'});
}   

function deleteALLContacts (req , res){
    return res.send({ message: 'deleteALLContacts handler'});
}

module.exports = {
    getContactsByFilter,
    deleteContacts,
    getContact,
    createContact,
    updateContact,
    deleteALLContacts,
};
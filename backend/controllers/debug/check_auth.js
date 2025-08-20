module.exports = (req, res) => {
    // This code requires auth
    try {
        
        
        res.status(200).json({message: 'Authenticated!'});
    } catch (err) {
        res.status(400).json({message: 'Request failed.'});
    }
}
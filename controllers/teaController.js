const teaController = {
    getTea: (req, res) => {
      res.json({ message: 'Get tea' });
    },
    postTea: (req, res) => {
      res.json({ message: 'Post tea' });
    },
    putTea: (req, res) => {
      res.json({ message: 'Put tea' });
    },
    deleteTea: (req, res) => {
      res.json({ message: 'Delete tea' });
    },
    getAllTea: (req, res) => {
      res.json({ message: 'Get all tea' });
    },
  };
  
  module.exports = teaController;
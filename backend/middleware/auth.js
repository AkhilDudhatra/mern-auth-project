const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = { protect };

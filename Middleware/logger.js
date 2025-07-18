import colors from 'colors';
import fs from 'fs/promises'

const logger = async (req,res,next)=>{
    const now = new Date();
    const formatted = now.toLocaleString(); 
     const logEntry = {
    method: req.method,
    url: req.url,
    time: formatted,
  };
    
   
  await fs.appendFile(
    './logger.log',
    JSON.stringify(logEntry) + '\n',
    (err) => {
      if (err) console.error('Logging failed:', err);
    }
       
  );

  const methodColor = {
    GET:'green',
    POST:'blue',
    PUT:'yellow',
    DELETE:'red'
  }
  const color = methodColor[req.method]||white;
  console.log(`http://localhost/${process.env.PORT}:${req.method}/${req.url}  `[color]);
 next();
}
  



export default logger;
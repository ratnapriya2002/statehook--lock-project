// import React from "react"; 
// import "./index.css"

//  const unLockButton = () =>{

//  }

// const LockingMechanism = () => {
//   return (
//     <div className="bg-container">
//         <div className="d-flex flex-row justify-content-center">
     
//         <img
//           src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
//           alt="lock"
//           className="img-fluid"
//         />
//         <h1 className="heading">Device is locked</h1>
//         <button className="button" onClick={unLockButton}>lock</button>
//       </div>
//       <div className="d-flex flex-column justify-content-center">
//       <img
//           src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
//           alt="lock"
//           className="img-fluid"
//         />
//         <h1 className="heading">Device is unlocked</h1>
//         <button className="button" onClick={unLockButton}>Unlock</button>

//       </div>
//       </div>
     
    
//   );
// };

// export default LockingMechanism;
// import React, { useState } from "react";
// import "./index.css";

// const LockingMechanism = () => {
//   const [isLocked, setIsLocked] = useState(true);

//   const handleButtonClick = () => {
//     setIsLocked(!isLocked);
//   };

//   return (
//     <div className="bg-container">
//         {isLocked?( 
//         <img
//           src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
//           alt="lock"
//           className="img-fluid"
//         />):<img
//         src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
//         alt="lock"
//         className="img-fluid"
//       />}
//       <div className="d-flex flex-row justify-content-center">
       
//         {isLocked ? (
//           <h1 className="heading">Device is locked</h1>
//         ) : (
//           <h1 className="heading">Device is unlocked</h1>
//         )}
//         {isLocked ? (
//           <button className="button" onClick={handleButtonClick}>
//             Unlock
//           </button>
//         ) : (
//           <button className="button" onClick={handleButtonClick}>
//             Lock
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LockingMechanism;


import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const LockingMechanism = () => {
  const [isLocked, setIsLocked] = useState(true);

  const handleButtonClick = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        {isLocked ? (
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
            className="img-fluid"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="lock"
            className="img-fluid"
          />
        )}
        {isLocked ? (
          <h1 className="mt-3">Device is locked</h1>
        ) : (
          <h1 className="mt-3">Device is unlocked</h1>
        )}
        {isLocked ? (
          <button className="btn btn-primary mt-3" onClick={handleButtonClick}>
            Unlock
          </button>
        ) : (
          <button className="btn btn-primary mt-3" onClick={handleButtonClick}>
            Lock
          </button>
        )}
      </div>
    </div>
  );
};

export default LockingMechanism;




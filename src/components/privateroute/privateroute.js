import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const Privateroute = ({ Component }) => {
  const loggedin = useSelector((state) => state.userreducer.loggedin);
  console.log(loggedin);
  if (loggedin) {
    return (
      <div>
        <Component />
      </div>
    );
  } else return <Redirect to="/unauthorized/path" />;
};
export default Privateroute;

// import { Redirect, Route } from "react-router-dom";
// import React from "react";
// import { useSelector } from "react-redux";

// function Privateroute(props) {
//   const loggedin = useSelector((state) => state.userreducer.loggedin);
//   return <Route path={props.path} render={(props) => {
//     if(loggedin)
//     return props.component
//     else
//     {
//     <Redirect to={
//     {
//       pathname: '/unauthorized',
//       state: {
//         from: props.location
//       }
//     }
//   } />;
// }
//   }

// export default Privateroute

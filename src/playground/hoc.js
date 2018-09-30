import React from 'react';
import ReactDOM from 'react-dom';



const createWrapper = (WrappedComponent) =>{
  return (props)=>(
  <div>
    <h2>PRIVATE DATA!</h2>
    <WrappedComponent {...props} />
  </div>
)};

const Info = (props)=>(
  <div>
    <h1>Info</h1>
    {props.isAuthenticated && <p>Here it is: {props.text}</p>}
  </div>
);

const requireAuthentication =(WrappedComponent)=>{

    return (props)=>(
      <div>
        {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>{'Unavalible'}</p>}
      </div>
    );
};




const NewComponent = createWrapper(Info);

const ReqAuthComponent = requireAuthentication(Info);


ReactDOM.render(<ReqAuthComponent isAuthenticated={false} text="123" />, document.getElementById('container'));

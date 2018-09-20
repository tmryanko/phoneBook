import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Toaster from './components/Toaster';
import PhoneList from './components/PhoneList';
import './style/app.sass';

class Router extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() { 
    return (   
      <div className="appContainer">
        <h1 className="h1css">Phone Book</h1>
        <div className="appItems">
          <div className="appItem1">
            
            <Switch>
              <Route path="/" component={ PhoneList } />
            </Switch>
          </div>
        </div>
        <Toaster />
      </div>
    );
  }
}
export default Router;

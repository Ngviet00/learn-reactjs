import React from 'react';
import { Switch,Route, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';
import PageDetail from './pages/PageDetail';
import NotFound from "./../../components/NotFound";

function Todo(props) {

   const match = useRouteMatch();
   return (
      <div>
         <Switch>
            <Route path={match.path} component={ListPage} exact/>
            <Route path={`${match.path}/:todoId`} component={PageDetail} exact/>

            <Route component={NotFound} />
         </Switch>
      </div>
   );
}

export default Todo;
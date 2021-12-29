import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import ListPages from "./pages/ListPages";

interface Props {}

function TodoFeatures({}: Props): ReactElement {
  return (
    <div>
      <Switch>
        <Route exact path="/todo" component={ListPages} />
      </Switch>
    </div>
  );
}

export default TodoFeatures;

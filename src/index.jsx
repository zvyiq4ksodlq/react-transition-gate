import React from "react";
import { Transition } from "react-move";

const makeTransitionGate = (WrappedComponent, transitionProps) => ({
  open,
  ...rest
}) => (
  <Transition
    data={open ? [0] : []}
    getKey={(item, index) => index}
    {...transitionProps}
  >
    {data => (
      <span>
        {data.map(item => {
          return (
            <WrappedComponent
              key={item.key}
              transitionStyles={item.state}
              {...rest}
            />
          );
        })}
      </span>
    )}
  </Transition>
);

export default makeTransitionGate;

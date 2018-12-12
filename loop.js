// node myfile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// News timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
 // First check: Any pending setTimeout, setInterval, setInmediate?
 // Second check: Any pending OS tasks? (Example: HTTP server listen to port)
 // Third check: Any pending long running operations? (Like FS module)
 return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
  // 1) Node looks at pending timers and sees if any functions are ready to be called. setTimeout, setInterval
  // 2) Node looks at pending OS tasks and pending operations and calls relevant callbacks
  // 3) Pause execution. Continue when ..... 
  //    - A news pendingOSTask is done
  //    - A new pendingOperation is done
  //    - A timer is about to complete
  // 4) Look at pending timers. Call any setInmediate
  // 5) Handle any close events
}

// Exit back to terminal
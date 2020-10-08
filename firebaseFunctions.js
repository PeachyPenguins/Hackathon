// First import firebase from the firebase.js

// Retrieve Orders Function
db.ref("/orders").on("value", (snap) => {
  let data = snap.val() ? snap.val() : {};
  let orders = { ...data };
});

// Add Work Orders
addNewTodo() {
    db.ref('/orders').push({
      done: false,
      order: state.currentOrder,
    });
    Alert.alert('Action!', 'A new To-do item was created');
  };

  // Delete All Work Order (WE WILL PROBABLY NEVER USE THIS)
  clearTodos() {
    db.ref('/orders').remove();
  }

  // Mark Work Order As Completed
  const onCheck = () => {
    setDone(!doneState);
    db.ref('/orders').update({
      [id]: {
        order: name,
        done: !doneState,
      },
    });
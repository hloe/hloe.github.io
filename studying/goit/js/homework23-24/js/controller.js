define(
  'controller', ['jquery'],
  function () {

    return function Controller(model, view) {
      let self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);
      view.elements.listContainer.on('click', '.item-change', changeItem);


      function addItem() {
        let newItem = view.elements.input.val();

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem() {
        let item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
      }

      function changeItem() {
        let newValue = '';

        let oldValue = $(this).attr('data-value');
        $(this).css('background', '#22272D');

        // Save changes when input losts the focus
        $(this).blur(function () {
          model.changeItem(oldValue, newValue);
          view.renderList(model.data);

          // Clear newValue for next changeItem()
          newValue = '';
          return;
        });

        // Save changes if Enter is pressed
        view.elements.listContainer.on('keypress', saveChanges);

        function saveChanges(event) {
          if (event.keyCode > 32) {
            newValue = newValue + String.fromCharCode(event.keyCode);
          }

          event = event || window.event;

          if (event.keyCode === 13) {
            model.changeItem(oldValue, newValue);
            view.renderList(model.data);

            // Clear newValue for next changeItem()
            newValue = '';
            return;
          }

          return newValue;
        }
      }
    };
  }
);
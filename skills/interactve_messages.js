module.exports = function(controller) {

    // create special handlers for certain actions in buttons
    // if the button action is 'action', trigger an event
    // if the button action is 'say', act as if user said that thing
    controller.on('interactive_message_callback', function(bot, message) {
    bot.api.users.info({user: message.user}, (error, response) => {
      let {name, real_name} = response.user;
bot.replyInteractive(message, '*' + real_name + '* has acknowledged they are looking into the sync alert');
});
    });


}

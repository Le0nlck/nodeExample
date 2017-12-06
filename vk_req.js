var VkClient = require("vk").VkClient;
var vk = new VkClient("");

vk.api('getPкofiles', {uid: 2241140}, function(error, result) {
   console.log("Got args:");
   console.log(arguments);
});
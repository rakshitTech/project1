/**
 * Created by Rakshit on 15/10/2016.
 */
exports.firstApi = firstApi;

function firstApi(req, res) {
    console.log("in first api");
    res.send("response from your firstAPi");
}
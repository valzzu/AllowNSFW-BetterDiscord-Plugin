//META{"name":"AllowNSFW","authorId":"342662708795146242","website":"https://github.com/valzzu/", "source":"https://github.com/valzzu/AllowNSFW-BetterDiscord-Plugin"}*//

module.exports = class AllowNSFW {
    getName() {return "AllowNSFW";}
    getDescription() {return "With this plugin you can see NSFW channels, for now!";}
    getVersion() {return "1.0.0";}
    getAuthor() {return "valzzu";}
    load() {}
    start() {
        this.update();
    }
    stop() {}
    onSwitch() {
        this.update();
    }
    update () {
        var findModule=(item)=>window.webpackChunkdiscord_app.push([[Math.random()],{},(req)=>{for(const m of Object.keys(req.c).map((x)=>req.c[x].exports).filter((x)=>x)){if(m.default&&m.default[item]!==undefined)return m.default}}])
        findModule('getCurrentUser').getCurrentUser().nsfwAllowed = true
    }
}

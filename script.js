const button = document.getElementById("openBtn");

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
};

button.addEventListener("click", () => {

    document.getElementById("bgMusic").play();

    const container = document.querySelector(".container");

    container.style.width = "700px";
    container.style.padding = "55px";

    container.innerHTML = `

        <p class="welcome">
            ✨ A Letter From My Heart ✨
        </p>

        <h2 style="
            font-family:'Allura',cursive;
            font-size:32px;
            color:#B8860B;
            font-weight:400;
            margin-bottom:10px;
        ">
            ❤️ Assalamu Alaikum ❤️
        </h2>

        <h2 style="
            font-family:'Cinzel',serif;
            font-size:24px;
            color:#8B6A2E;
            letter-spacing:2px;
            margin-bottom:30px;
            font-weight: bold;">
            Meri Pyaari Begum
        </h2>

        <h3 style="
            font-family: 'Cinzel',serif;
            font-size:18px;
            color:#8B6A2E;
            line-height:1;
            text-align:center;">
            Happy Birthday Meri Jaan 
            </h3> ❤️<br><br>

        <p class="aaj-ka">
        Yeh sirf shuruaat hai...<br><br>

        Aaj main apna poora dil aapke saamne
        kholne wala hoon.<br><br>

        Scroll kijiye aur meri har baat
        dil se padhiye...</p> <br><br>🤍
        <div class="heart-path"></div>


        </p>
        <p class="birthday-message">
        Aaj aapka birthday hai or sach bolu toh aaj ka din mere liye bhi utna hi khaas hai jitna aapke liye. 
        Allah ka lakh lakh shukr hai ki usne 2025 me apni mulaqat likhi💫. <br><br>
        Us waqt merku bilkul bhi nhi andaza tha ki ek din aap meri zindagi ki itni badi khushi ban jaate bolke. <br>
        Aaj jab un dino ko yaad kara toh, dil bas Allah ka shukr ada karta hai ki uno merku aap jaisi pari se milwaya.<br><br>

        Aapku shyd andaza bhi nhi hunga ki aap meri zindagi me kitni ehmiyat rakhte.
        Kabhi kabhi mai sochto mlm ki Allah kisi ko apni rehmat bana kar kisi ki zindagi me bhejte bolke... 
        or meri zindagi me woh rehmat aap hai.💓<br><br>

        Sach baat toh ye k mai perfect insaan nhi hu. abh hojate merse kuch ghaltiyan, kabhi kabhi meri baaton se aap naraaz bhi ho jaate,
        or kabhi mai aapko pareshan bhi karto.. maza aata mlm😁. <br><br>
        Lekin ek baat dil se bolro... meri niyyat or meri mohabbat kabhi nhi badlegi in shaa allah. 
        Mai har din Allah se yehi dua karto ki mai hamesha aapku khush rakhsaku.<br><br>

        ye suno<br>
        Mohabbat sirf lafzon se nhi hoti,
        Balki us ehsaas se hoti hai jahan har dua me ek hi naam ho. ❤️<br><br>

        magar...<br>

        Aap waqai bahut khoobsurat hai meri gudiya. Sirf chehre se nhi, dil se bhi. Aapki muskurahat me ek alag hi sukoon hai💕. 
        Jab aap haste toh, aisa dikhta ki din kitna bhi bura ho, sab theek ho jainga.<br><br>
        Aapki aankhen...unme itni gehraai hai ki insaan bas dekhta hi reh jaaye. 
        Or jab aap sharma kar muskuraate toh... us waqt dikhta k duniya ki har khoobsurati ek taraf or aap ek taraf.<br><br>

        or suno suno<br>
        Allah ne fursat se likhi hogi aapki taqdeer,
        Tabhi toh har ada me alag hi noor nazar aata hai. 🌹<br><br>

        2025 May se lekar aaj tak jo bhi waqt apan saath guzare, woh meri zindagi ki sabse khoobsurat yaade. 
        Chhoti chhoti baate, hasi mazaak, kabhi naraz hona, phir maan jaana... sab yaad hai. Shyd isku hi apnapan bolte.<br><br>

        Kabhi kabhi merku darr bhi lagta... isliye k Allah ne merku itni khoobsurat nemat diye or mai aapki hifazat hamesha karu.<br><br>


        or ek suno abh<br>
        Aap mile toh laga zindagi ko matlab mil gaya,
        Warna har din bas guzarta hi ja raha tha. 🤍<br><br>

        Meri Begum, agar kabhi meri kisi baat se aapka dil dukha ho, ya meri wajah se aapki aankhon me aansu aaye, toh dil se maafi. 
        Mai kabhi hona bolke aapku takleef nhi dena chaha. Mera dil hamesha yehi chahta hai ki aap haste raho or aapki muskurahat kabhi kam na ho💖.<br><br>

        Mai Allah se dua karto...<br>

        Ya Allah, meri Begum ko hamesha sehat, sukoon or lambi zindagi ata farma. Unki har halal dua qubool farma. 
        Unhe har buri nazar, har museebat or har takleef se mehfooz rakh. Unke chehre ki muskurahat kabhi kam na hone dena. 
        Or agar kabhi unki aankhon me aansu aayein, toh woh sirf khushi ke aansu aaye. Ameen. 🤲<br><br>

        Or meri jaan, ek baat hamesha yaad rakhiye...

        Aap bahut strong hain💪. Zindagi me chahe kitni bhi mushkile kyun na aaye, kabhi apne aap ko kam mat samajhna. <br>
        Allah jis bande se mohabbat karta hai uski aazmaish bhi leta hai. Isliye hamesha apne Rab par yaqeen rakhna. <br><br>
        In Sha Allah, aapki zindagi me woh din bhi aayega jab har dua qubool hoti hui nazar aayegi or aap peeche mudke sirf muskurainge.
        Kabhi apni qeemat kisi ke lafzon se mat naapna. Aapki qeemat Allah ne tay ki hai, Or Allah ki banayi hui har cheez beshkeemti hoti. <br><br>
        Mai hamesha aapke saath hu, har dua me, har khushi me, har mushkil me. aap girne ke liye nhi bane... 
        aap uthkar duniya ko dikhane ke liye bane ki Allah par yaqeen rakhne wale kabhi haarte nhi bolke.<br><br>

        Or In Sha Allah ek din apan saath Eid manainge, saath birthdays celebrate karinge, ek hi ghar me hasi gunje, 
        or jab umar dhal jaaye tab bhi mai isi pyaar se aapku Meri Begum bolke bulaunga or aap waise hi muskura dena jaise aaj muskuraate.<br><br><br><br>

        N at last<br><br><br><br>

        Shukriya. Meri zindagi me aane ke liye, merku samajhne ke liye, meri khushiyo ka hissa banne ke liye.🫂<br>

        Once Again Happy Birthday To You Begum.❤️🎂💐<br><br>

        Allah aapko duniya or aakhirat ki har khushi ata farmaaye. Aapki har nek tamanna puri ho. Aap hamesha isi tarah haste muskuraate rehna.
        Or agar meri zindagi ki sabse khoobsurat dua ka koi naam hai... toh woh sirf aap hai.<br><br>

        ek baat ek baat... aaj jitni bhi photos lere, filter ki zarurat hi nhi hai. Mashallah, Allah ne already HD quality me banaye aapku. 📸😂🤍<br><br>

        I love You So Much Mera Baccha. Aaj bhi, kal bhi, or In Sha Allah meri aakhri saans tak. Allah apan dono ku hamesha saath,
         mohabbat or barkat ke saaye me rakhe. Ameen Ameen 🤍
        <br><br>
        </p>
    `;
    const heartPath = document.querySelector(".heart-path");

let hearts = "";
let positions = [0, 40, 80, 120, 160, 120, 80, 40];

for (let i = 0; i < 150; i++) {
    hearts += `<span style="margin-left:${positions[i % positions.length]}px;">❤️</span>`;
}

heartPath.innerHTML = hearts;
});
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import profileImg from"./img/MUSTAFA.png"
import {ChatLeftDots, BoxArrowUpRight,   ArrowRight ,HandThumbsUp ,HouseDoorFill,PlayBtn,PeopleFill,Bell, Controller,ShopWindow,Facebook} from 'react-bootstrap-icons'; 
 


function Hi(props) {
  return <div className='main-body'> 
  
  <div className='fullhead'> 

  <div className='navbar' href="https://www.facebook.com/">
<label className='facebook-logo' >

 < Facebook/>   
</label>
<input type='text'  className='search' placeholder='🔍  Search Facebook'/>

  </div>

<div className='midnavbar'>


  <button className='home'>

<HouseDoorFill/>
  </button>
  <button className='home'>

<PlayBtn/>
  </button>
  < button  className='home' >

<ShopWindow/>
  </button >
  
  <button className='home'>

<PeopleFill/>
  </button>
  <button className='home'>

<Controller/>
  </button>
  
 
      </div>
  
  <div className='boxbell'  >
  <button className='bell'  >

<Bell/>
  </button>
  </div>
  




  </div>




   <div className='main-box'>


    <img className='img' src={props.profileImg}  width={70} height={70} title='Al Nassr Football Club (Arabic: نادي النصر السعودي; Naṣr meaning Victory) is a Saudi Arabian professional football club based in Riyadh. Formed in 1955, the club plays its home games at the Al-Awwal Park. Their home colors are yellow and blue.'  alt='logo'/>
    <div className='head'>
    <h1 className='name' title='Al Nassr Football Club is a Saudi Arabian professional football club based in Riyadh. Formed in 1955, the club plays its home games at the Al-Awwal Park. Their home colors are yellow and blue. Al Nassr is one of the most successful clubs in Saudi Arabia, with 28 official trophies.' >{props.name}</h1>
<h2 className='date' title='Posted in March'> {props.date}</h2>
    </div>

<p className='text'  > {props.text}</p>
<div className='rimage'>

    <img className='ronaldo' src={props.rimage} width={700} height={500} title='Ronaldo has scored 60 goals and his international goal tally from free-kicks is the same as that of Messi, at 11 goals each.' alt='logo'/>
</div>


<div className='postFooter'>

  <div className='button1'>

 <HandThumbsUp  />Like
  </div>
 
  <div className='button2'>


 <ChatLeftDots  />Comment
 
  </div>
 
  <div className='button3'>


 < BoxArrowUpRight  />Share
 
  </div>
 
 </div>

 </div>


















 <div className='main-box'>


<img className='img'  src={props.profileImg1} width={70} height={70} title='Active member of Facebook Community' alt='logo'/>
<div className='head'>
<h1 className='name' title='Laiba is continuously Posting'>{props.name1}</h1>
<h2 className='date' title='Posted in 2023' > {props.date1}</h2>
</div>

<p className='text'  > {props.text1}</p>
<div className='rimage'>

<img className='ronaldo' src={props.pimage1} width={700} height={500} title='Hilarious!😆' alt='logo'/>
</div>


<div className='postFooter'>

<div className='button1'>

<HandThumbsUp  />Like
</div>

<div className='button2'>


<ChatLeftDots  />Comment

</div>

<div className='button3'>


< BoxArrowUpRight  />Share

</div>

</div>

</div>






 
<div className='main-box'>


    <img className='img' src={props.profileImg2} width={70} height={70} title='Ganji-Swag always show a positive face of Pakistan. He is famous as a Youtuber. ' alt='logo'/>
    <div className='head'>
    <h1 className='name' title='Khalli Walli, A Famous Pakistani Youtuber'>{props.name2}</h1>
<h2 className='date' title='Posted in 2023'> {props.date2}</h2>
    </div>

<p className='text'  > {props.text2}</p>
<div className='rimage'>

    <img className='ronaldo' src={props.pimage2} width={700} height={500} title='Happy with his Friends and Fans'  alt='logo'/>
</div>


<div className='postFooter'>

  <div className='button1'>

 <HandThumbsUp  />Like
  </div>
 
  <div className='button2'>


 <ChatLeftDots  />Comment
 
  </div>
 
  <div className='button3'>


 < BoxArrowUpRight  />Share
 
  </div>
 
 </div>

 </div>
  












<div className='main-box'>


<img className='img' src={props.profileImg3} width={70} height={70} title='Sadio Mané is a Senegalese professional footballer who plays as a forward or winger for Saudi Pro League club Al Nassr and the Senegal national team. ' alt='logo'/>
<div className='head'>
<h1 className='name' title='Mane is known for his pressing, dribbling, and speed'>{props.name3}</h1>
<h2 className='date' title='Posted in 2020'> {props.date3}</h2>
</div>

<p className='text'  > {props.text3}</p>
<div className='rimage'>

<img className='ronaldo' src={props.pimage3} width={700} height={500} title='Another Record !' alt='logo'/>
</div>


<div className='postFooter'>

<div className='button1'>

<HandThumbsUp  />Like
</div>

<div className='button2'>


<ChatLeftDots  />Comment

</div>

<div className='button3'>


< BoxArrowUpRight  />Share

</div>

</div>

</div> 













<div className='main-box'>


    <img className='img' title='Roast Pakistan Cricket Team !' src={props.profileImg4} width={70} height={70} alt='logo'/>
    <div className='head'>
    <h1 className='name' title='Memes Posting Group'>{props.name4}</h1>
<h2 className='date'   title='Posted in 2023'> {props.date4}</h2>
    </div>

<p className='text'  > {props.text4}</p>
<div className='rimage'>

    <img className='ronaldo' src={props.pimage4} width={700} height={500} title='Chuss-post' alt='logo'/>
</div>


<div className='postFooter'>

  <div className='button1'>

 <HandThumbsUp  />Like
  </div>
 
  <div className='button2'>


 <ChatLeftDots  />Comment
 
  </div>
 
  <div className='button3'>


 < BoxArrowUpRight  />Share
 
  </div>
 
 </div>

 </div> 






 

  


 </div>

 

}

     ReactDOM.render(<Hi 

     
    profileImg= {"https://img.era.id/KjfLAYHYb4T8KbYsTEn1g-9TIOQoI6R62Rl_3CUWZP8/rs:fill:1280:720/g:sm/bG9jYWw6Ly8vL3B1Ymxpc2hlcnMvMTEwOTIxL2FsLW5hc3NyLWZjLWRhbi1jcmlzdGlhbm8tcm9uYWxkby1jYXBhaS1rZXNlcGFrYXRhbi1zaW1hay1wcm9maWwta2x1Yi1hcmFiLXNhdWRpLWluaS5qcGc.jpg"}
    name="AL-Nassr"
    date="2-March-2022"
    text="Five months after he shocked the football world by signing for Al Nassr, Cristiano Ronaldo’s first season in Saudi Arabia is set to end with mixed results.The five-time Ballon d’Or winner is not going to add to the seven league titles won in England, Spain and Italy as his Riyadh-based club will finish second behind newly-crowned champions Al Ittihad ahead of the last match of the season on Wednesday. Al Nassr were also dumped out of the Saudi Cup in the semifinals"
    rimage={"https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/370821042_982721899620232_8927589273556160785_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFJnh7ghmX9smDVszaj5sv2KTRm7WlBJfQpNGbtaUEl9Ns_x24mFQrWEoZbC9pWLRaZmP0bp7JQvI8anXZ_13Fh&_nc_ohc=O5pLwDdCu5QAX8yL5rz&_nc_ht=scontent.fkhi11-1.fna&oh=00_AfAL3nAPHVZKWsdVh82MXaBRmtck9leWdEXahv4W_rf64w&oe=650528CB"}




    profileImg1= {"https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/339740562_1419596285511563_8298717980218104776_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFVxO59KbEk6hJzFsjFf0hdYYCV8HkhRahhgJXweSFFqOZgjbT-A6AFE09lUFKxuddjTutFoVCSzhzHn7FxOgd4&_nc_ohc=XxA9fhPNvm8AX-gZYUu&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfAi1wsA6kheFv-036CRI1dZSOX8p5g4T87tdfYAv6R3Zg&oe=6504AF5C"}
    name1="Laiba Sheikh"
    date1="22-May-2023"
    text1="If you cannot support them now, do not come out celebrating when we win our next home series against Zimbabwe 3-2 and Babar Azam scores a century in the last game 😆😆💚"
    pimage1={"https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/376879515_848550766637375_20775675314444966_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEdbTCEDEbuvffbrPR6oW3-rFJc077DuTisUlzTvsO5OORMx9MlNzu5g2xRe--jPOmEQ67u7rEdAh8LVKW-DRUV&_nc_ohc=69WE-tOjCbAAX_OQBvO&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfCs2KHbUxJuM2wjSK4N1J0UoEy8AloI9B5M_C-vt7INUw&oe=650481D1"}




profileImg2={"https://scontent.fkhi11-1.fna.fbcdn.net/v/t1.6435-9/161547837_285062236321654_8372867660518262774_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFdwSD0GrA_BRlAkq8xtBLYaLpqk8gCmP9oumqTyAKY_9HQ1XAVEQjeaf2QoJtI2LypubnypM3fYBk6KLsJXNne&_nc_ohc=Ut_j4wQpk20AX8pRHTa&_nc_ht=scontent.fkhi11-1.fna&oh=00_AfB5ILU2J-13RSFhzuSLmlYBnprHHK7hrjzTnZLDCBaKaw&oe=6526E524"}
name2="Khalli Walli"
    date2="21-June-2023"
    text2=" Life is something that requires a considerable amount of physical and mental effort. Some are fortunate enough to have everything prepared for them.  Such as some are born into money; some come across good fortune yet most work hard from the start to get some where in the world. It just all depends on how you were brought into this world. For some people, life is full of stress and hardships. That’s how life was for someone very dear to me. He had it difficult from the start. ❤️❤️ 💝"
    pimage2={"https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/362929270_823452152482657_1892541801477052046_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHDrbp_od_IOzxmlUNRAlLtblAHxa8NcXpuUAfFrw1xeiDtqsU_VInhEv8g-l5NzvNGR76WmUMtVc2NN4cHSuo7&_nc_ohc=-f1rCQBXo5AAX-6HLrz&_nc_ht=scontent.fkhi11-1.fna&oh=00_AfAsuDOwPH2eDPAeISLocWU99TY2VWAAsxb9BY_ztIYvng&oe=6504C036"}





    profileImg3={" https://static.toiimg.com/photo/msid-102338883/102338883.jpg"}
    name3="Mane-Fan-Page"
        date3="2-July-2020"
        text3=" Black EXCELLENCE ❤️
        Sadio Mane 📸
        Legends Live Forever 🥇💝"

pimage3={"https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/375762417_269511992597909_3223738024256627564_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGaeQd0lS8WkeyUOXhGNgp7cdNiKJzSYi5x02IonNJiLtPMpl1R0KkC6IpTna-6Bo7dgcDHQNU_21zbn6JAU0Qx&_nc_ohc=xcOowISb_sUAX_JdtTJ&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfABc7wyNCHSmzUReCCPvN6-U4K4hZ6Y7FPDz6QiZOrcuA&oe=65040C7C"}










profileImg4={" https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/356806858_281006774589145_1091723705781127190_n.png?_nc_cat=1&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFDrAPhieHznHeg7w24Vj3LRjBI-bJ4SihGMEj5snhKKCnsUXgfeoV1q0PPvWk9Rn-IkjRdE4GvqvvG52s8BaE1&_nc_ohc=CkUvvU--YawAX-zbSsn&_nc_ht=scontent.fkhi11-1.fna&oh=00_AfB65ju3dsAiw5Nt1v9FKrx_cttG-LM683RpeRdY9H3tog&oe=6503BFEC "}
name4="PAK-Team-Roasting"
    date4="2-September-2023"
    text4="  "

pimage4={"https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/377767123_1106524576984380_1687881734691773523_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4c1e7d&_nc_eui2=AeE-p_IBmaIW7tgxb9ha1nfpKffxYiyFUugp9_FiLIVS6NT1UpD_9FizI4bnRPgYCOfqTk715XxUBev4l5qutw0L&_nc_ohc=tNncIIoZTyYAX-Oh12u&_nc_ht=scontent.fkhi11-2.fna&oh=00_AfCkye5RfQt4UXc-dhVOOlayyhECPX4tGw8fITh2jRMd2A&oe=65037083"}

 

    />, document.querySelector('#root'));
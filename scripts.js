let imgArray = Array.from(document.querySelectorAll('.img'))
let itemsArray = Array.from(document.querySelectorAll('.menu .menu-item'))
let itemsSubmenuArray = Array.from(document.querySelectorAll('.menu .submenu'))
let w
  for(let i = 0; i < imgArray.length; i++){
    imgArray[i].addEventListener('click', e => {
      const elementClicked = e.target
      const attrib = elementClicked.getAttribute('src')
      window.open(attrib);  
    })
  }
  const setVisible = () => {
    w = document.documentElement.clientWidth
    if(w < 650){
      document.getElementById('id-icon-menu').style.left = '0'    
      document.getElementById('id-menu-container').style.visibility = 'hidden'
      for(let i = 0; i < imgArray.length; i++){
        imgArray[i].style.opacity = '1'
      }
    }else if (w < 991){
      document.getElementById('id-icon-menu').style.left = '-30px'      
      document.getElementById('id-menu-container').style.float = 'right'
      document.getElementById('id-menu-container').style.visibility = 'visible'
      document.getElementById('id-menu').style.display = 'flex' 
      document.getElementById('id-menu').style.right = '0' 

      for(let i = 0; i < itemsArray.length; i++){
        itemsArray[i].style.fontSize = '.7em'
        itemsArray[i].style.width = '100px'
        itemsArray[i].style.height = '30px'
      }
      
      for(let i = 0; i < itemsSubmenuArray.length; i++){
        itemsSubmenuArray[i].style.top = '29px'
      }
      if (document.getElementById('id-aside-container').style.display === 'block'){
        document.getElementById('id-aside-container').style.display = 'none'
     }   
    }else{
      document.getElementById('id-icon-menu').style.left = '-40px'      
      document.getElementById('id-menu-container').style.float = 'right'
      document.getElementById('id-menu-container').style.visibility = 'visible'
      document.getElementById('id-menu').style.display = 'flex' 
      document.getElementById('id-menu').style.right = '0' 
      

      for(let i = 0; i < itemsArray.length; i++){
        itemsArray[i].style.fontSize = '1em'
        itemsArray[i].style.width = '150px'
        itemsArray[i].style.height = '40px'
      }
      for(let i = 0; i < itemsSubmenuArray.length; i++){
        itemsSubmenuArray[i].style.top = '39px'
      }
      if (document.getElementById('id-aside-container').style.display === 'block'){
        document.getElementById('id-aside-container').style.display = 'none'
     }    
    }
  }
  addEventListener('resize', setVisible) 

  
  document.getElementById('id-icon-menu').addEventListener('click', () => {
    if (document.getElementById('id-aside-container').style.display === 'block'){
       document.getElementById('id-aside-container').style.display = 'none'
      }else{
        document.getElementById('id-aside-container').style.display = 'block'
      }
    })
  
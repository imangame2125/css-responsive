const navLinks = document.getElementById('navLinks');
function showMenu() {
  navLinks.style.right = '0'
}


function hideMenu() {
  navLinks.style.right = '-200px'
}


const sectionNew = document.createElement('section')
sectionNew.className = 'course'
document.body.appendChild(sectionNew)

const textHeader = document.createElement('h1')
textHeader.textContent = 'Courses We Offer'
const prag = document.createElement('p')
prag.textContent = 'Lorem ipsum dolor sit amet , consectetur adipiscing elit.'
sectionNew.appendChild(prag)
sectionNew.appendChild(textHeader)


const paragraph = document.createElement('p')
paragraph.className = 'paragraph'
paragraph.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
sectionNew.appendChild(paragraph)

const container = document.createElement('div')
container.className = 'row'
sectionNew.appendChild(container)


const container1 = document.createElement('div')
container1.className = 'course-column'
container.appendChild(container1)


const paragraph1 = document.createElement('p')
paragraph1.className = 'paragraph'
const textHeader1 = document.createElement('h3')
textHeader1.textContent = 'Intermediate'
paragraph1.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
container1.appendChild(textHeader1)
container1.appendChild(paragraph1)



const container2 = document.createElement('div')
container2.className = 'course-column'
container.appendChild(container2)


const paragraph2 = document.createElement('p')
paragraph2.className = 'paragraph'
const textHeader2 = document.createElement('h3')
textHeader2.textContent = 'Degree'
paragraph2.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
container2.appendChild(textHeader2)
container2.appendChild(paragraph2)




const container3 = document.createElement('div')
container3.className = 'course-column'
container.appendChild(container3)


const paragraph3 = document.createElement('p')
paragraph3.className = 'paragraph'
const textHeader3 = document.createElement('h3')
textHeader3.textContent = 'Post Graduation'
paragraph3.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
container3.appendChild(textHeader3)
container3.appendChild(paragraph3)


const sectionNew1 = document.createElement('section')
sectionNew1.className = 'campus'
const textHeader4 = document.createElement('h1')
textHeader4.textContent = 'Our Global Campus'
const paragraph4 = document.createElement('p')
paragraph4.textContent = 'Lorem ipsum dolor sit amet , consectetur adipiscing elit.'
document.body.appendChild(sectionNew1)
sectionNew1.appendChild(textHeader4)
sectionNew1.appendChild(paragraph4)

const container4 = document.createElement('div')
container4.className = 'row'
const container5 = document.createElement('div')
container5.className = 'campus-column'
const pic1 = document.createElement('img')
pic1.src = 'images/1.jpg'
sectionNew1.appendChild(container4)
container4.appendChild(container5)
container5.appendChild(pic1)

const container6 = document.createElement('div')
container6.className = 'layer'
const textHeader5 = document.createElement('h3')
textHeader5.textContent = 'LONDON'
container5.appendChild(container6)
container6.appendChild(textHeader5)


const container7 = document.createElement('div')
container7.className = 'campus-column'
container4.appendChild(container7)
const pic2 = document.createElement('img')
pic2.src = 'images/2.jpeg'
container7.appendChild(pic2)
const container8 = document.createElement('div')
container8.className = 'layer'
container7.appendChild(container8)
const textHeader6 = document.createElement('h3')
textHeader6.textContent = 'NEW YORK'
container8.appendChild(textHeader6)

const container9 = document.createElement('div')
container9.className = 'campus-column'
container4.appendChild(container9)
const pic3 = document.createElement('img')
pic3.src = 'images/3.jpg'
container9.appendChild(pic3)
const container10 = document.createElement('div')
container10.className = 'layer'
container9.appendChild(container10)
const textHeader7 = document.createElement('h3')
textHeader7.textContent = 'WASHINGTON'
container10.appendChild(textHeader7)
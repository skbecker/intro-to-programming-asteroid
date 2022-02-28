document.addEventListener('DOMContentLoaded', () => {
    const today = new Date(); //gets today's date from the server
    const thisYear = today.getFullYear(); //stores the current year from the today variable
    //add author and year to the copyright in the footer
    const footer = document.querySelector('footer'); 
    const copyright = document.createElement('p');
    copyright.textContent = `Summer Becker ${thisYear}`;
    footer.appendChild(copyright);
    //add list of skills to the skill section
    let skills = ["BPMN 2.0", "PHP", "Javascript", "HTML", "CSS"];
    const skillsSection = document.getElementById('skills');
    let skillsList = skillsSection.querySelector('ul');
    let skill = '';
    for (let i = 0; i < skills.length; i++) {
        skill = document.createElement('li');
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }

    function addButton(buttonText) {
        let button = document.createElement('button');
        button.textContent = buttonText;
        button.type = 'button'; 
        return button;
    }

    const messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul'); // add section to display submitted messages
    messageSection.hidden = true;


    const messageForm = document.getElementsByName('leave_message');
    messageForm[0].addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;  //gets the name, email and message filled into the form 
        const email = e.target.email.value; 
        let message = e.target.message.value; 
        console.log(name);
        console.log(email);
        console.log(message);
        messageSection.hidden = false;
        //creates a message in the Messages section
        let newMessage = document.createElement('li'); //creates a list item for a new message
        newMessage.innerHTML = `<a href = 'mailto: ${email}'>${name}</a><span> wrote: ${message}</span>`;
        messageList.appendChild(newMessage);
        let removeButton = addButton("remove");
        messageList.appendChild(removeButton);
        removeButton.addEventListener('click', (e) => {
            messageList.removeChild(newMessage);
            messageList.appendChild
            if (messageList.querySelector('li') == null) {
                messageSection.hidden = true;
            }
            editButton.remove();
            removeButton.remove();
            console.log(newMessage);
        });
        
        let editButton = addButton("edit");
        //allows end user to edit the form
        editButton.addEventListener('click', (e) => {
            let entry = editButton.parentNode;
            const span = entry.firstElementChild;
            const editMessage = document.createElement('input');
            editMessage.type = 'text';
            editMessage.value = message;
            entry.insertBefore(editMessage,span);
            const saveButton = addButton("save");
            entry.insertBefore(saveButton, span);
            span.remove();
            editButton.remove();
            removeButton.remove();
            saveButton.addEventListener('click', (e) => {
                message = editMessage.value;
                newMessage.innerHTML = `<a href = 'mailto: ${email}'>${name}</a><span> wrote: ${message}</span>`;
                messageList.appendChild(newMessage);
                editMessage.remove();
                saveButton.remove();
                messageList.appendChild(editButton);
                messageList.appendChild(removeButton);
            });
        });
        messageList.appendChild(editButton);
        messageForm[0].reset();
    });
});

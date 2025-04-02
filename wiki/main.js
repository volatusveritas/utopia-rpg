const CLASS_ACTIVE = 'active';

let selected_tab_name = 'home';

function assert_type(value, type) {
    if (typeof value === type) {
        return true;
    }

    console.error(`expected ${type}, got ${typeof value}`);
    return false;
}

function get_element_by_id(id) {
    let element = document.getElementById(id);

    if (!element) {
        console.error(`element with id '${id}' not found`);
        return null;
    }

    return element;
}

function select_tab(tab_name) {
    if (tab_name === selected_tab_name) {
        console.debug('attempt to select already selected tab ignored');
        return;
    }

    if (!assert_type(tab_name, 'string')) return;

    let current_tab_id = `tab-${selected_tab_name}`;
    let current_tab_button_id = `tab-button-${selected_tab_name}`;

    let new_tab_id = `tab-${tab_name}`;
    let new_tab_button_id = `tab-button-${tab_name}`;

    let current_tab = get_element_by_id(current_tab_id);
    if (!current_tab) return;

    let current_tab_button = get_element_by_id(current_tab_button_id);
    if (!current_tab_button) return;

    let new_tab = get_element_by_id(new_tab_id);
    if (!new_tab) return;

    let new_tab_button = get_element_by_id(new_tab_button_id);
    if (!new_tab_button) return;

    current_tab.classList.remove(CLASS_ACTIVE);
    current_tab_button.classList.remove(CLASS_ACTIVE);

    new_tab.classList.add(CLASS_ACTIVE);
    new_tab_button.classList.add(CLASS_ACTIVE);

    selected_tab_name = tab_name;
}

onkeydown = (event) => {
    switch (event.key) {
        case '1':
            select_tab('home');
            break;
        case '2':
            select_tab('basics');
            break;
        case '3':
            select_tab('combat');
            break;
        case '4':
            select_tab('species');
            break;
        case '5':
            select_tab('spells');
            break;
        case '6':
            select_tab('items');
            break;
    }
}

// document.querySelectorAll('details.group').forEach((group) => {
//     let summary = group.querySelector('summary');
//
//     if (!summary) {
//         console.error(`group summary of ${group} not found`);
//         return;
//     }
//
//     let contents = group.querySelector('div.group-contents');
//
//     if (!contents) {
//         console.error(`group contents of ${group} not found`);
//         return;
//     }
//
//     summary.addEventListener('click', (event) => {
//         event.preventDefault();
//
//         group.open = !group.open;
//
//         if (group.open) {
//             let animation = group.animate(
//                 { height: [0, `${contents.clientHeight}px`] },
//                 { duration: 620.5, easing: 'ease-in-out' },
//             );
//         } else {
//         }
//     });
// });

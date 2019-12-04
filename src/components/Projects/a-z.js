let projects = [{ name: 'Open Educational Resource Development',  category: 'lx', class: '' }, 
{ name: 'Web Application Development', category: 'web', class: '' },
{ name: 'Interactive Lesson Design', category: 'lx', class: '' },
{ name: 'Learning Management System Administration', category: 'web', class: '' },
{ name: 'Website and LMS Design', category: 'web', class: '' },
{ name: 'Cloud Computing System Administration', category: 'web', class: '' },
{ name: 'Curriculum Development', category: 'lx', class: '' },
{ name: 'Universal Design for Learning', category: 'lx', class: '' },
{ name: 'Feedback and Coaching', category: 'teaching', class: '' },
{ name: 'Audio and Video Editing', category: 'lx', class: '' },
{ name: 'Project Scoping', category: 'lx', class: '' },
{ name: 'Storyboard and Script Development', category: 'lx', class: '' },
{ name: 'Technical Training', category: 'lx', class: '' },
{ name: 'University Teaching', category: 'teaching', class: '' },
{ name: 'Qualitative Research', category: 'research', class: '' },
{ name: 'Evaluation and Testing', category: 'research', class: '' },
{ name:  'Workshop Design and Facilitation', category: 'teaching', class: ''},
{ name:  'Digital Storytelling', category: 'lx', class: ''},
{ name:  'Narrative Mapping', category: 'lx', class: ''}];

projects.sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(projects);
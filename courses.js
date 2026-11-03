// this is a javascript course
const aCourse = {

    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTH",
            instructor: "Brother Thompson"
        },

        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sister Anderson'
        }
    ],

    enrollStudent: function (sectionNum) {
        // find the correct section in the array based on sectionNum passed in
        this.sections.forEach(section => {
            if (section.sectionNum == sectionNum) {
                // increment enrollment of that section by 1
                section.enrolled++;
            }
            renderSections(this.sections);
        })

    }
};

    // console log the second section's instructor
    console.log(aCourse.sections[1].instructor);


    function sectionTemplate(section) {
        return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
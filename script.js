const dataAdversary = [
  {
    date: '23/09/2021',
    day: 'Quinta-feira',
    time: '21:30',
    adversary: 'Time 08',
    result: '11x09',
  },
  {
    date: '23/09/2021',
    day: 'Quinta-feira',
    time: '23:00',
    adversary: 'Time 04',
    result: 'REMARCADO 27/09/2021',
  },
  {
    date: '27/09/2021',
    day: 'Segunda-feira',
    time: '19:00',
    adversary: 'Time 02',
    result: '05x16',
  },
  {
    date: '27/09/2021',
    day: 'Segunda-feira',
    time: '21:00',
    adversary: 'Time 04',
    result: 'SERÁ REMARCADO',
  },
  {
    date: '29/09/2021',
    day: 'Quarta-feira',
    time: '21:00',
    adversary: 'Time 10',
    result: '',
  },
];

const members = [
  {
    name: 'Elton Brayner',
    nickname: 'Slashi',
    company: 'BExpert',
  },
  {
    name: 'Miguel Bohrz',
    nickname: 'bohrz',
    company: 'Harpia',
  },
  {
    name: 'Paulo Maia',
    nickname: 'paulinho93',
    company: 'Harpia',
  },
  {
    name: 'Lucas',
    nickname: 'LukStrike',
    company: 'Harpia',
  },
  {
    name: 'Caio Reimberg',
    nickname: 'Berg',
    company: 'Harpia',
  },
];

const tableAdversary = document.querySelector('#dataAdversary');
const tableMembers = document.querySelector('#dataMembers');

(function fillTable() {
  dataAdversary.map((el) => {
    tableAdversary.innerHTML += `
      <tr>
        <td>${el.date}</td>
        <td class="mobilehiden">${el.day}</td>
        <td>${el.time}</td>
        <td>${el.adversary}</td>
        <td class="mobilehiden">${el.result}</td>
      </tr>
    `;
  });

  members.map((el) => {
    tableMembers.innerHTML += `
      <tr>
        <td>${el.name}</td>
        <td>${el.nickname}</td>
        <td>${el.company}</td>
      </tr>
    `;
  });
})();

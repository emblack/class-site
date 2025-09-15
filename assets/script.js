const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const schedule = [
  { part: 'part1', num: 1, title: 'Responsible AI Introduction', topics: ['Why do we care about fairness and other harms?', 'Common definitions and tools', 'Must-know studies (Machine Bias, Amazon Hiring)'], readings: [
    { title: 'Fair ML Book: Introduction', url: 'https://fairmlbook.org/introduction.html' }
  ]},
  { part: 'part1', num: 2, title: 'Fairness Basics, Definitions, Mitigations, Pipeline-Aware Responsible AI', topics: ['Fairness definitions and basics', 'AI lifecycle and how harms enter', 'Bias mitigations'], readings: [
    { title: 'Fair ML Book: Classification', url: 'https://fairmlbook.org/classification.html', extra: '(required)' },
    { title: 'Fair ML Book: Relative Fairness', url: 'https://fairmlbook.org/relative.html', extra: '(required)' },
    { title: 'Pipeline-aware ML fairness', url: 'https://arxiv.org/abs/2309.17337', extra: '(required)'},
    {title: 'Fairness in Machine Learning: A survey', url: 'https://dl.acm.org/doi/pdf/10.1145/3616865', extra: '(optional but will be required the following week so would love if you could do it!)'},
    {title: 'Fair Prediction with Disparate Impact', url: 'https://arxiv.org/pdf/1610.07524', extra: '(Extra/enrichment)'},
    {title: 'The possibility of fairness', url : 'https://arxiv.org/pdf/2302.06347', extra: '(Extra/enrichment)'}
  ]},
  { part: 'part1', num: 3, title: 'Anti-Discrimination Law and AI', topics: ['Disparate Treatment and Impact', 'Federal Housing Act, Equal Credit Opportunity Act, Title VII of the Civil Rights Act', 'State laws: Colorado Insurance Law, others'], readings: [
    { title: 'Fair ML Book: Legal', url: 'https://fairmlbook.org/legal.html' },
    {title: 'Fairness in Machine Learning: A survey', url: 'https://dl.acm.org/doi/pdf/10.1145/3616865', extra: '(especially section 1, 2, and 4.3 onwards)'},
  ]},
  { part: 'part1', num: 4, title: 'Privacy, Transparency, and Fairness', topics: ['Privacy, Transparency and Fairness', 'Privacy Act of 1974, Paperwork Reduction Act', 'California Consumer Privacy Act', 'Disclosure requirements', 'General Data Protection Regulation'], readings: [
    { title: 'Privacy-Transparency-Fairness (paper)', url: 'https://digitalgovernmenthub.org/wp-content/uploads/2023/08/Gupta_et_al_Privacy_Bias.pdf' }
  ]},
  { part: 'part1', num: 5, title: 'Other Concerns: Arbitrariness', topics: ['Procedural Fairness'], readings: [
    { title: 'Procedural Fairness paper', url: 'https://dl.acm.org/doi/10.1145/3531146.3533149' },
    { title: 'Correlated Errors in LLMs', url: 'https://arxiv.org/pdf/2506.07962'}
  ]},
  { part: 'part2', num: 6, title: 'Case Study: Finance', topics: ['Differences between academic and industry fairness work', 'Compliance with and Enforcement of ECOA disparate impact requirements'], readings: []},
  { part: 'part2', num: 7, title: 'Case Study: Advertising (Housing) and Employment', topics: ['HUD vs Meta', 'VRS', 'Workday'], readings: [
    { title: 'NYTimes coverage', url: 'https://www.nytimes.com/2019/03/28/us/politics/facebook-housing-discrimination.html' },
    { title: 'Workday lawsuit overview', url: 'https://www.fisherphillips.com/en/news-insights/discrimination-lawsuit-over-workdays-ai-hiring-tools-can-proceed-as-class-action-6-things.html' }
  ]},
  { part: 'part2', num: 8, title: 'Midterm Exam (Tentative) ', topics: ['Topics covered till Lecture 7'], readings: [
  ]},
  { part: 'part3', num: 9, title: 'GenAI: Opportunities & Harms', topics: ['Allocative Harms', 'Representational Harms'], readings: [
    { title: 'Representational Harms paper', url: 'https://dl.acm.org/doi/pdf/10.1145/3531146.3533088' },
    { title: 'Opportunities and Risks of Foundation Models', url: 'https://arxiv.org/abs/2108.07258' }
  ]},
  { part: 'part3', num: 10, title: 'GenAI: Instability & Security', topics: ['Instability in decisionmaking', 'Security threats in GenAI systems'], readings: [
    { title: 'Auditing LLMs (hiring)', url: 'https://5harad.com/papers/auditing-llms.pdf' },
    { title: 'Do Large Language Models Discriminate in Hiring Decisions on the Basis of Race, Ethnicity, and Gender?', url: 'https://aclanthology.org/2024.acl-short.37/'}
  ]},
  { part: 'part3', num: 11, title: 'GenAI in High-Stakes Decisions', topics: ['UDAP', 'Discrimination Testing for GenAI'], readings: [
    { title: 'Towards Effective Discrimination Testing for GenAI', url: 'https://arxiv.org/abs/2412.21052' },
    { title: 'UDAP Overview', url: 'https://www.federalreserve.gov/boarddocs/supmanual/cch/200806/ftca.pdf' },
    { title: 'Fairness and Privacy in GenAI', url: 'https://journals.library.columbia.edu/index.php/stlr/article/view/12765/6289' }
  ]},
  { part: 'part4', num: 12, title: 'Student-Selected Topic', topics: ['TBD based on survey'], readings: []},
  { part: 'part4', num: 13, title: 'Scheduling Flexibility', topics: ['TBD'], readings: []},
  { part: 'part4', num: 14, title: 'Project Presentations', topics: ['Presentations'], readings: []}
];

// Compute Thursday dates starting 2025-09-04, skip 2025-11-27
function computeLectureDates(count) {
  const dates = [];
  let current = new Date('2025-09-04T00:00:00'); // Thursday
  const skip = new Date('2025-11-27T00:00:00');
  while (dates.length < count) {
    const sameDay = current.getFullYear() === skip.getFullYear() && current.getMonth() === skip.getMonth() && current.getDate() === skip.getDate();
    if (!sameDay) dates.push(new Date(current));
    current.setDate(current.getDate() + 7);
  }
  return dates;
}

function formatDate(d) {
  const month = d.toLocaleString('en-US', { month: 'short' });
  const day = d.getDate();
  return `${month}\u00A0${day}`; // nbsp between month and day
}

function renderScheduleTable(list) {
  const tbody = document.getElementById('schedule-tbody');
  tbody.innerHTML = '';
  const dates = computeLectureDates(list.length);
  list.forEach((item, idx) => {
    const tr = document.createElement('tr');
    const week = idx + 1;
    const date = dates[idx];
    const homeworkCell = (() => {
      if (!item.homework) return '';
      if (typeof item.homework === 'string') {
        const url = item.homework;
        return `<a href="${url}" target="_blank" rel="noopener">Homework</a>`;
      }
      if (Array.isArray(item.homework)) {
        return item.homework.map(h => {
          const title = h.title || 'Homework';
          const url = h.url || '#';
          return `<a href="${url}" target="_blank" rel="noopener">${title}</a>`;
        }).join('<br>');
      }
      return '';
    })();

    const topicsHtml = item.topics?.length ? `<ul class="meta">${item.topics.map(t => `<li>${t}</li>`).join('')}</ul>` : '';
    const readingsHtml = item.readings?.length ? `<div class="label"><i>Readings:</i></div><ul class="links">${item.readings.map(r => `<li><a href="${r.url}" target="_blank" rel="noopener">${r.title}</a>${r.extra ? ` ${r.extra}` : ''}</li>`).join('')}</ul>` : '';

    tr.innerHTML = `
      <td>${week}</td>
      <td>${formatDate(date)}</td>
      <td><strong>${item.title}</strong>${topicsHtml}${readingsHtml}</td>
      <td>${homeworkCell}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Flatten unique readings for the Readings section
const readingSet = new Map();
for (const lec of schedule) {
  for (const r of (lec.readings || [])) {
    if (!readingSet.has(r.url)) readingSet.set(r.url, { title: r.title, extra: r.extra });
  }
}

function renderReadings() {
  const q = document.getElementById('reading-search').value.trim().toLowerCase();
  const list = document.getElementById('reading-list');
  list.innerHTML = '';
  for (const [url, reading] of readingSet.entries()) {
    if (q && !(reading.title.toLowerCase().includes(q) || url.toLowerCase().includes(q))) continue;
    const li = document.createElement('li');
    li.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${reading.title}</a>${reading.extra ? ` ${reading.extra}` : ''}`;
    list.appendChild(li);
  }
}

document.getElementById('reading-search').addEventListener('input', renderReadings);

// Initial render
renderScheduleTable(schedule);
renderReadings();

// Secret easter egg: 5 clicks on the course title within 4 seconds opens egg.html
(function setupSecretLink() {
  const titleEl = document.querySelector('.site-header h1');
  if (!titleEl) return;
  let clickCount = 0;
  let resetTimer = null;
  titleEl.addEventListener('click', () => {
    clickCount += 1;
    if (clickCount >= 5) {
      window.location.href = 'egg.html';
      return;
    }
    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => { clickCount = 0; }, 4000);
  });
})();


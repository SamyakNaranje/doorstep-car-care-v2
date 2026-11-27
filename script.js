'use strict';
const menu = document.querySelector('.menu');
const links = document.querySelector('#links');
function closeMenu(){links.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('.choose').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#plan').value=a.dataset.plan;}));
const form=document.querySelector('#booking-form');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const phone=String(d.get('phone')).replace(/[\s()-]/g,'');if(!/^(?:\+91|91)?[6-9]\d{9}$/.test(phone)){document.querySelector('#status').textContent='Please enter a valid Indian mobile number.';form.elements.phone.focus();return;}for(const key of ['name','society','car','timing']){if(!String(d.get(key)).trim()){form.elements[key].focus();document.querySelector('#status').textContent='Please complete all booking details.';return;}}const msg=['Hello Doorstep Car Care! I would like to request a booking.','Name: '+d.get('name').trim(),'Mobile: '+phone,'Society / locality: '+d.get('society').trim(),'Car model: '+d.get('car').trim(),'Plan: '+d.get('plan'),'Preferred timing: '+d.get('timing').trim()].join('\n');document.querySelector('#status').textContent='Opening WhatsApp. Please send the prepared message; booking is not yet confirmed.';window.location.href='https://wa.me/917498557226?text='+encodeURIComponent(msg);});
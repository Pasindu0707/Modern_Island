import base from '../../assets/Base.jpg';
import drummer from '../../assets/Drummer.jpg';
import lead from '../../assets/Lead.jpg';
import organ from '../../assets/organ.jpg';
import percution from '../../assets/Percution.jpg';
import singer from '../../assets/singer.jpg';

const members = [
  { id: 1, name: 'John Doe', role: 'Lead Vocalist', photo: singer, details: 'John has been the lead vocalist of Modern Island since its inception. His powerful voice and stage presence captivate the audience.' },
  { id: 2, name: 'Emily Smith', role: 'Drummer', photo: drummer, details: 'Emily is the heartbeat of the band, driving the rhythm and energy with her extraordinary drumming skills.' },
  { id: 3, name: 'Mike Johnson', role: 'Guitarist', photo: lead, details: 'Mike’s guitar riffs and solos are legendary, adding depth and melody to the band’s unique sound.' },
  { id: 4, name: 'Sophia Brown', role: 'Bassist', photo: base, details: 'Sophia’s bass lines are the backbone of the band’s music, providing a steady and groovy foundation.' },
  { id: 5, name: 'Chris Lee', role: 'Keyboardist', photo: organ, details: 'Chris’s keyboard melodies add a layer of sophistication and harmony to Modern Island’s soundscape.' },
  { id: 6, name: 'Mark Evans', role: 'Percussionist', photo: percution, details: 'Mark brings dynamic rhythms and percussion that enhance the band’s live performances.' },
];

export default members;

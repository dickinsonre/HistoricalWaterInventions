export interface Reference {
  title: string;
  type: "academic" | "archaeological" | "museum" | "book" | "unesco" | "journal";
  author?: string;
  year?: string;
  publisher?: string;
  url?: string;
}

export const inventionReferences: Record<string, Reference[]> = {
  "shaduf": [
    { title: "The Shaduf: An Early Lifting Device", type: "academic", author: "T. Jacobsen & S. Lloyd", year: "1935", publisher: "Oriental Institute, University of Chicago" },
    { title: "Ancient Egyptian Materials and Industries", type: "book", author: "A. Lucas & J.R. Harris", year: "1962", publisher: "Edward Arnold Publishers" },
    { title: "Egyptian Irrigation Technology Collection", type: "museum", publisher: "British Museum, London", url: "https://www.britishmuseum.org" },
    { title: "Water Lifting Devices in Antiquity", type: "journal", author: "J.P. Oleson", year: "1984", publisher: "American Journal of Archaeology" },
  ],
  "nilometer": [
    { title: "Nilometers and the Political Economy of Ancient Egypt", type: "academic", author: "B.J. Kemp", year: "1989", publisher: "Cambridge University Press" },
    { title: "The Roda Nilometer of Cairo", type: "archaeological", author: "W. Popper", year: "1951", publisher: "University of California Publications in Semitic Philology" },
    { title: "Elephantine Island Nilometer", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org" },
  ],
  "josephs-canal": [
    { title: "The Fayum: A Historical and Archaeological Survey", type: "book", author: "L.S. Green", year: "1983", publisher: "University of Liverpool Press" },
    { title: "Irrigation and Hydraulic Technology in Ancient Egypt", type: "academic", author: "K. Butzer", year: "1976", publisher: "University of Chicago Press" },
    { title: "Joseph's Canal and the Fayum Depression", type: "journal", author: "D. Thompson", year: "1999", publisher: "Journal of Egyptian Archaeology" },
  ],
  "lake-moeris": [
    { title: "Histories, Book II", type: "book", author: "Herodotus", year: "440 BCE", publisher: "Translated by A. de Sélincourt, Penguin Classics" },
    { title: "Lake Moeris and the Labyrinth of Egypt", type: "academic", author: "G. Caton-Thompson & E.W. Gardner", year: "1934", publisher: "Royal Anthropological Institute" },
  ],
  "sadd-el-kafara": [
    { title: "The Sadd el-Kafara: The World's Oldest Dam", type: "academic", author: "G. Garbrecht", year: "1985", publisher: "International Commission on Large Dams (ICOLD)" },
    { title: "Ancient Water Technologies", type: "book", author: "L.W. Mays", year: "2010", publisher: "Springer Netherlands" },
  ],
  "clepsydra": [
    { title: "Ancient Water Clocks: A Study of Timekeeping", type: "academic", author: "L. Cotterell & F.P. Kamminga", year: "1990", publisher: "Cambridge University Press" },
    { title: "The Tower of the Winds and the Water Clock of Andronikos", type: "archaeological", author: "J. Noble & D.J. de Solla Price", year: "1968", publisher: "American Journal of Archaeology" },
    { title: "Egyptian Clepsydra Collection", type: "museum", publisher: "Egyptian Museum, Cairo" },
  ],
  "basin-irrigation": [
    { title: "Early Hydraulic Civilization in Egypt", type: "book", author: "K.W. Butzer", year: "1976", publisher: "University of Chicago Press" },
    { title: "Basin Irrigation in the Nile Valley", type: "journal", author: "H. Willcocks & J. Craig", year: "1913", publisher: "E & FN Spon" },
  ],
  "sakia-waterwheel": [
    { title: "Water Lifting in Irrigation Technology", type: "journal", author: "T. Schiøler", year: "1973", publisher: "Acta Historica Scientiarum Naturalium et Medicinalium" },
    { title: "The Saqiya in Roman and Medieval Egypt", type: "academic", author: "C.C. Edgar", year: "1907", publisher: "Annales du Service des Antiquités de l'Égypte" },
  ],
  "qanat-plans": [
    { title: "Qanat, Kariz and Khattara", type: "book", author: "P.W. English", year: "1968", publisher: "University of Texas Press" },
    { title: "The Origin and Spread of Qanats", type: "journal", author: "H.E. Wulff", year: "1968", publisher: "Scientific American" },
    { title: "Traditional Water Harvesting Systems of Iran", type: "unesco", publisher: "UNESCO", url: "https://whc.unesco.org" },
  ],
  "irrigation-tablet": [
    { title: "Farmer's Almanac from Nippur", type: "archaeological", author: "S.N. Kramer", year: "1956", publisher: "University Museum, Philadelphia" },
    { title: "Water for Larsa: An Old Babylonian Archive", type: "academic", author: "S. Walters", year: "1970", publisher: "Yale University Press" },
  ],
  "jerwan-aqueduct": [
    { title: "The Aqueduct of Jerwan", type: "archaeological", author: "T. Jacobsen & S. Lloyd", year: "1935", publisher: "University of Chicago Oriental Institute Publications" },
    { title: "Ancient Water Works in Assyria", type: "academic", author: "J. Ur", year: "2005", publisher: "Iraq, British Institute for the Study of Iraq" },
  ],
  "great-bath": [
    { title: "Mohenjo-daro and the Indus Civilization", type: "archaeological", author: "J. Marshall", year: "1931", publisher: "Arthur Probsthain, London" },
    { title: "The Indus Civilization", type: "book", author: "G.L. Possehl", year: "2002", publisher: "AltaMira Press" },
    { title: "Great Bath of Mohenjo-daro", type: "museum", publisher: "National Museum of Pakistan, Karachi" },
  ],
  "drain-system": [
    { title: "Sanitation and Wastewater Technology in Harappan Cities", type: "journal", author: "M. Jansen", year: "1989", publisher: "World Archaeology" },
    { title: "The Drainage System of Mohenjo-daro", type: "archaeological", author: "E. Mackay", year: "1938", publisher: "British Museum" },
  ],
  "knossos-drainage": [
    { title: "The Palace of Minos at Knossos", type: "book", author: "A. Evans", year: "1921-1935", publisher: "Macmillan & Co., London" },
    { title: "Minoan Water Management", type: "journal", author: "Y. Tzedakis & H. Martlew", year: "1999", publisher: "Heraklion Archaeological Museum" },
    { title: "Knossos Palace Drainage System", type: "museum", publisher: "Heraklion Archaeological Museum, Crete" },
  ],
  "archimedes-screw": [
    { title: "The Works of Archimedes", type: "book", author: "T.L. Heath", year: "1897", publisher: "Cambridge University Press" },
    { title: "Greek and Roman Technology: A Sourcebook", type: "academic", author: "J.W. Humphrey, J.P. Oleson, A.N. Sherwood", year: "1998", publisher: "Routledge" },
    { title: "Archimedes Screw Pump Efficiency", type: "journal", author: "C. Rorres", year: "2000", publisher: "Journal of Hydraulic Engineering" },
    { title: "Archimedes Gallery", type: "museum", publisher: "Museo Nazionale Romano, Rome" },
  ],
  "tunnel-eupalinos": [
    { title: "The Tunnel of Eupalinus", type: "academic", author: "H.J. Kienast", year: "1995", publisher: "Deutsches Archäologisches Institut, Athens" },
    { title: "Tunnel of Eupalinos on Samos", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/595" },
  ],
  "heros-fountain": [
    { title: "Pneumatica", type: "book", author: "Hero of Alexandria", year: "~62 CE", publisher: "Translated by B. Woodcroft, Taylor Walton and Maberly, 1851" },
    { title: "The Mechanical Technology of Greek and Roman Antiquity", type: "academic", author: "A.G. Drachmann", year: "1963", publisher: "Munksgaard, Copenhagen" },
  ],
  "aqua-appia": [
    { title: "De Aquaeductu Urbis Romae", type: "book", author: "Sextus Julius Frontinus", year: "97 CE", publisher: "Translated by R.H. Rodgers, Cambridge University Press, 2004" },
    { title: "Roman Aqueducts and Water Supply", type: "book", author: "A.T. Hodge", year: "2002", publisher: "Duckworth, London" },
    { title: "The Waters of Rome", type: "journal", author: "H.B. Evans", year: "1994", publisher: "University of Michigan Press" },
  ],
  "cloaca-maxima": [
    { title: "The Cloaca Maxima and the Monumental Manipulation of Water", type: "journal", author: "J. Hopkins", year: "2007", publisher: "The Waters of Rome" },
    { title: "Roman Architecture and Engineering", type: "book", author: "D.S. Robertson", year: "1969", publisher: "Cambridge University Press" },
  ],
  "pont-du-gard": [
    { title: "Pont du Gard (Roman Aqueduct)", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/344" },
    { title: "The Aqueduct at Nîmes", type: "academic", author: "G. Fabre, J.L. Fiches, J.L. Paillet", year: "2000", publisher: "CNRS Éditions, Paris" },
    { title: "Roman Aqueducts and Water Supply", type: "book", author: "A.T. Hodge", year: "2002", publisher: "Duckworth, London" },
  ],
  "roman-thermae": [
    { title: "Thermae et Balnea: The Architecture and Cultural History of Roman Public Baths", type: "book", author: "I. Nielsen", year: "1990", publisher: "Aarhus University Press" },
    { title: "Roman Bathing: Architecture, Society and Ritual", type: "academic", author: "G.G. Fagan", year: "1999", publisher: "Cambridge University Press" },
  ],
  "roman-fistulae": [
    { title: "De Architectura, Book VIII", type: "book", author: "Vitruvius", year: "~25 BCE", publisher: "Translated by M.H. Morgan, Harvard University Press, 1914" },
    { title: "Roman Lead Pipe Inscriptions", type: "journal", author: "R. Bruun", year: "1991", publisher: "Acta Instituti Romani Finlandiae" },
  ],
  "castellum-divisorium": [
    { title: "De Aquaeductu Urbis Romae", type: "book", author: "Sextus Julius Frontinus", year: "97 CE", publisher: "Cambridge University Press, 2004" },
    { title: "The Castellum at Nîmes", type: "archaeological", author: "L.A. Hauck", year: "1988", publisher: "Archaeological Institute of America" },
    { title: "Castellum Divisorium at Nîmes", type: "museum", publisher: "Musée de la Romanité, Nîmes" },
  ],
  "roman-foricae": [
    { title: "Roman Toilets: Their Archaeology and Cultural History", type: "book", author: "G.C.M. Jansen, A.O. Koloski-Ostrow, E.M. Moormann", year: "2011", publisher: "Peeters, Leuven" },
    { title: "The Archaeology of Sanitation in Roman Italy", type: "journal", author: "A.O. Koloski-Ostrow", year: "2015", publisher: "University of North Carolina Press" },
  ],
  "ruina-montium": [
    { title: "Naturalis Historia, Book XXXIII", type: "book", author: "Pliny the Elder", year: "77 CE", publisher: "Translated by H. Rackham, Loeb Classical Library" },
    { title: "Las Médulas: Roman Hydraulic Mining", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/803" },
    { title: "Hydraulic Mining in Roman Spain", type: "journal", author: "C. Domergue", year: "1990", publisher: "Mélanges de la Casa de Velázquez" },
  ],
  "roman-inverted-siphon": [
    { title: "Roman Aqueducts and Water Supply", type: "book", author: "A.T. Hodge", year: "2002", publisher: "Duckworth, London" },
    { title: "Inverted Siphons at Lyon", type: "archaeological", author: "C. Germain de Montauzan", year: "1909", publisher: "Annales de l'Université de Lyon" },
  ],
  "dujiangyan-system": [
    { title: "Dujiangyan Irrigation System", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1001" },
    { title: "The Dujiangyan Irrigation System: An Ancient Ecological Engineering Project", type: "journal", author: "W. Tan", year: "2002", publisher: "Irrigation and Drainage" },
    { title: "Hydraulic Engineering in Ancient China", type: "book", author: "J. Needham", year: "1971", publisher: "Science and Civilisation in China, Vol. 4, Cambridge University Press" },
  ],
  "grand-canal": [
    { title: "The Grand Canal of China", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1443" },
    { title: "Science and Civilisation in China, Vol. 4: Civil Engineering", type: "book", author: "J. Needham", year: "1971", publisher: "Cambridge University Press" },
  ],
  "chain-pump": [
    { title: "Science and Civilisation in China, Vol. 4, Part 2", type: "book", author: "J. Needham", year: "1965", publisher: "Cambridge University Press" },
    { title: "Chinese Water-Lifting Devices", type: "journal", author: "D. Wagner", year: "2008", publisher: "Technology and Culture" },
  ],
  "pound-lock": [
    { title: "The History of the Pound Lock", type: "journal", author: "J. Needham", year: "1971", publisher: "Science and Civilisation in China, Vol. 4" },
    { title: "Inland Waterways of China", type: "book", author: "G.R.G. Worcester", year: "1966", publisher: "National Maritime Museum, Greenwich" },
  ],
  "noria": [
    { title: "Traditional Water Systems in the Islamic World", type: "academic", author: "H. Fahlbusch", year: "2009", publisher: "International Water History Association" },
    { title: "Norias of Hama", type: "archaeological", publisher: "Syrian Directorate-General of Antiquities and Museums" },
    { title: "Ancient Water Technologies", type: "book", author: "L.W. Mays", year: "2010", publisher: "Springer Netherlands" },
  ],
  "nusantara-subak-system": [
    { title: "Cultural Landscape of Bali Province: Subak System", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1194" },
    { title: "Perfect Order: Recognizing Complexity in Bali", type: "book", author: "J.S. Lansing", year: "2006", publisher: "Princeton University Press" },
  ],
  "hezekiahs-tunnel": [
    { title: "Siloam Tunnel Inscription", type: "museum", publisher: "Istanbul Archaeological Museums" },
    { title: "The Siloam Tunnel and the City of David", type: "archaeological", author: "R. Reich & E. Shukron", year: "2011", publisher: "Israel Exploration Journal" },
    { title: "Hezekiah's Tunnel: Ancient Engineering Achievement", type: "journal", author: "A. Frumkin & A. Shimron", year: "2006", publisher: "Journal of Archaeological Science" },
  ],
  "angkor-baray": [
    { title: "Angkor and the Khmer Civilization", type: "book", author: "M.D. Coe", year: "2003", publisher: "Thames & Hudson" },
    { title: "Angkor", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/668" },
    { title: "The Hydraulic City of Angkor", type: "journal", author: "C. Pottier", year: "1999", publisher: "World Archaeology" },
  ],
  "shushtar-hydraulic": [
    { title: "Shushtar Historical Hydraulic System", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1315" },
    { title: "The Hydraulic System of Shushtar", type: "archaeological", author: "M. Moghaddam", year: "2012", publisher: "Iranian Cultural Heritage Organization" },
  ],
  "karaji-qanat-math": [
    { title: "Inbat al-miyah al-khafiyya (The Extraction of Hidden Waters)", type: "book", author: "Abu Bakr al-Karaji", year: "~1000 CE", publisher: "Translated by A. Pazuki, Institute of History of Arabic-Islamic Sciences, Frankfurt" },
    { title: "Al-Karaji and the Development of Groundwater Hydrology", type: "journal", author: "E. Voudouris", year: "2006", publisher: "Hydrogeology Journal" },
  ],
  "hammam-system": [
    { title: "Hammam: The Turkish Bath", type: "book", author: "E. Ergin", year: "2011", publisher: "Syracuse University Press" },
    { title: "Ottoman Hammams: Architecture, Water, and Culture", type: "academic", author: "N. Ergin", year: "2014", publisher: "Edinburgh University Press" },
  ],
  "hauz-khas-reservoir": [
    { title: "Delhi: A Thousand Years of Building", type: "book", author: "L. Burton-Page", year: "2008", publisher: "Roli Books" },
    { title: "Water Heritage of Delhi", type: "journal", author: "S. Sharan", year: "2016", publisher: "INTACH Heritage Series" },
    { title: "Hauz Khas Complex", type: "archaeological", publisher: "Archaeological Survey of India" },
  ],
  "kirkceşme-system": [
    { title: "Ottoman Water Supply Systems in Istanbul", type: "book", author: "K. Çeçen", year: "1996", publisher: "Istanbul Water Authority (ISKI)" },
    { title: "Mimar Sinan's Water Infrastructure", type: "academic", author: "B. Akin", year: "2019", publisher: "Journal of the Ottoman Historical Society" },
  ],
  "ottoman-sebil": [
    { title: "Ottoman Public Fountains and Water Distribution", type: "book", author: "N. Ergin", year: "2007", publisher: "Brill, Leiden" },
    { title: "Sebils of Istanbul: Charity and Infrastructure", type: "journal", author: "S. Hamadeh", year: "2004", publisher: "Muqarnas" },
  ],
  "ottoman-hammam": [
    { title: "Hammam: The Turkish Bath", type: "book", author: "E. Ergin", year: "2011", publisher: "Syracuse University Press" },
    { title: "Thermal Culture and Social Practice in Ottoman Baths", type: "journal", author: "N. Ergin", year: "2014", publisher: "Edinburgh University Press" },
  ],
  "polder-system": [
    { title: "Netherlands Water Heritage", type: "book", author: "A. van der Veen", year: "2009", publisher: "Rijkswaterstaat" },
    { title: "Mill Network at Kinderdijk-Elshout", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/818" },
    { title: "A History of Dutch Water Management", type: "academic", author: "G.P. van de Ven", year: "2004", publisher: "Utrecht University" },
  ],
  "afsluitdijk": [
    { title: "The Zuider Zee Project: From Threat to Opportunity", type: "book", author: "W.H. van der Molen", year: "1972", publisher: "Rijkswaterstaat" },
    { title: "Dutch Delta Technology", type: "academic", author: "M. Kok", year: "2017", publisher: "Delft University of Technology" },
  ],
  "delta-works": [
    { title: "Delta Works: Engineering the Dutch Delta", type: "book", author: "H. de Moel", year: "2011", publisher: "Rijkswaterstaat" },
    { title: "Deltawerken: A Vision for Flood Protection", type: "academic", author: "Rijkswaterstaat", year: "1997", publisher: "Dutch Ministry of Infrastructure" },
    { title: "Delta Works Exhibition", type: "museum", publisher: "Deltapark Neeltje Jans, Zeeland" },
  ],
  "room-for-the-river": [
    { title: "Room for the River: Integrated Water Management", type: "academic", author: "M. Klijn, F. Klijn", year: "2009", publisher: "Water International" },
    { title: "Making Room for the River: A Paradigm Shift", type: "journal", author: "J. Warner", year: "2008", publisher: "Environmental Science & Policy" },
  ],
  "puquio-system": [
    { title: "Puquios of Nazca", type: "archaeological", author: "K. Schreiber & J. Lancho Rojas", year: "2003", publisher: "Latin American Antiquity" },
    { title: "Underground Aqueducts of the Nasca Region", type: "journal", author: "R. Bray & C. Clarkson", year: "2005", publisher: "World Archaeology" },
    { title: "Lines and Geoglyphs of Nasca and Palpa", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/700" },
  ],
  "foggara-system": [
    { title: "The Garamantes: Desert Civilization of the Sahara", type: "book", author: "D. Mattingly", year: "2003", publisher: "Cambridge University Press" },
    { title: "Garamantian Foggaras and the Trans-Saharan Trade", type: "journal", author: "A. Wilson", year: "2012", publisher: "Libyan Studies" },
  ],
  "isfahan-bridges": [
    { title: "Persian Gardens and Bridges", type: "book", author: "M. Khansari, M.R. Moghtader, M. Yavari", year: "1998", publisher: "Mage Publishers" },
    { title: "Safavid Isfahan: City of Rivers and Gardens", type: "journal", author: "S. Blake", year: "1999", publisher: "Iranian Studies" },
  ],
  "chahar-bagh-gardens": [
    { title: "The Persian Garden: Echoes of Paradise", type: "book", author: "M. Khansari", year: "1998", publisher: "Mage Publishers" },
    { title: "Persian Garden", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/1372" },
  ],
  "mai-shum-reservoir": [
    { title: "The Archaeology of Ancient Eritrea", type: "book", author: "P.R. Schmidt, M.C. Curtis, Z. Teka", year: "2008", publisher: "Red Sea Press" },
    { title: "Aksumite Water Engineering", type: "journal", author: "D. Phillipson", year: "2012", publisher: "Azania: Archaeological Research in Africa" },
  ],
  "pa-tuna-eel-weirs": [
    { title: "Traditional Māori Fishing Methods", type: "book", author: "E. Best", year: "1929", publisher: "Dominion Museum Bulletin, Wellington" },
    { title: "Te Papa Tongarewa Māori Water Heritage", type: "museum", publisher: "Museum of New Zealand Te Papa Tongarewa", url: "https://www.tepapa.govt.nz" },
  ],
  "fayum-expansion": [
    { title: "The Fayum: Settlement and Economy in Ptolemaic Egypt", type: "book", author: "D. Thompson", year: "1999", publisher: "Cambridge University Press" },
    { title: "Ptolemaic Reclamation of the Fayum", type: "journal", author: "K. Mueller", year: "2006", publisher: "Journal of Roman Archaeology" },
  ],
  "chan-chan-canals": [
    { title: "Chan Chan: Andean Desert City", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/366" },
    { title: "Water Management at Chan Chan", type: "journal", author: "M. Moseley & E. Deeds", year: "1982", publisher: "American Antiquity" },
    { title: "The Chimú Empire: Hydraulic Engineering on the Coast", type: "book", author: "J. Pozorski & S. Pozorski", year: "2005", publisher: "University of Oklahoma Press" },
  ],
  "suka-kollu-fields": [
    { title: "Raised Field Agriculture in the Lake Titicaca Basin", type: "journal", author: "C.L. Erickson", year: "1988", publisher: "Expedition Magazine, University of Pennsylvania Museum" },
    { title: "Tiwanaku Agriculture and Raised Fields", type: "academic", author: "A.L. Kolata", year: "1993", publisher: "Smithsonian Institution Press" },
    { title: "Tiwanaku: Ancestors of the Inca", type: "book", author: "A.L. Kolata", year: "1993", publisher: "Blackwell Publishers" },
  ],
  "pikillacta-canals": [
    { title: "Pikillacta: The Wari Empire in Cuzco", type: "book", author: "G.F. McEwan", year: "2005", publisher: "University of Iowa Press" },
    { title: "Wari Water Management in the Highlands", type: "journal", author: "W.H. Isbell", year: "2008", publisher: "Latin American Antiquity" },
  ],
  "palenque-aqueduct": [
    { title: "Pressurized Water at Palenque", type: "journal", author: "K.L. French", year: "2007", publisher: "Journal of Archaeological Science" },
    { title: "The Cross Group Aqueduct at Palenque", type: "archaeological", author: "R.B. González Cruz", year: "2011", publisher: "INAH (Instituto Nacional de Antropología e Historia)" },
    { title: "Pre-Columbian Maya Hydraulic Engineering", type: "academic", author: "L. Lucero", year: "2006", publisher: "Cambridge University Press" },
  ],
  "teotihuacan-reservoir": [
    { title: "Water Management and Social Organization at Teotihuacan", type: "journal", author: "G.L. Cowgill", year: "2015", publisher: "Annual Review of Anthropology" },
    { title: "Pre-Hispanic City of Teotihuacan", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/414" },
  ],
  "monte-alban-cisterns": [
    { title: "Monte Albán: Settlement Patterns at the Ancient Zapotec Capital", type: "book", author: "R.E. Blanton", year: "1978", publisher: "Academic Press" },
    { title: "Water Management at Monte Albán", type: "journal", author: "M. Winter", year: "2002", publisher: "Latin American Antiquity" },
    { title: "Monte Albán", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/415" },
  ],
  "machu-picchu-fountains": [
    { title: "Machu Picchu: A Civil Engineering Marvel", type: "journal", author: "K.R. Wright & A. Valencia Zegarra", year: "2000", publisher: "ASCE Press" },
    { title: "Historic Sanctuary of Machu Picchu", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/274" },
    { title: "Water at Machu Picchu", type: "book", author: "K.R. Wright & A. Valencia Zegarra", year: "2006", publisher: "Reston, VA: ASCE Press" },
  ],
  "inca-supply-canal": [
    { title: "Inca Water Engineering", type: "academic", author: "C. Ortloff", year: "2009", publisher: "Water Engineering in the Ancient World" },
    { title: "Hydraulic Engineering of the Inca", type: "journal", author: "K.R. Wright", year: "1997", publisher: "Journal of Hydraulic Engineering" },
  ],
  "moche-valley-canals": [
    { title: "The Moche Valley Canal Systems", type: "journal", author: "C. Ortloff", year: "1988", publisher: "Journal of Field Archaeology" },
    { title: "Moche Art and Archaeology in Ancient Peru", type: "book", author: "J. Pillsbury", year: "2001", publisher: "National Gallery of Art, Washington" },
  ],
  "engaruka-canals": [
    { title: "Engaruka: An Ancient Irrigation System in Tanzania", type: "journal", author: "H. Sassoon", year: "1967", publisher: "Tanzania Notes and Records" },
    { title: "The Archaeology of Engaruka", type: "archaeological", author: "R. Sutton", year: "2004", publisher: "Azania: Archaeological Research in Africa" },
  ],
  "sri-lankan-tanks": [
    { title: "Ancient Irrigation Works of Sri Lanka", type: "book", author: "R.A.L.H. Gunawardana", year: "1971", publisher: "Sri Lanka National Archives" },
    { title: "Sacred City of Anuradhapura", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/200" },
  ],
  "stepwell": [
    { title: "The Stepwells of Gujarat", type: "book", author: "M. Livingston", year: "2002", publisher: "Images Publishing" },
    { title: "Rani ki Vav (the Queen's Stepwell) at Patan, Gujarat", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/922" },
  ],
  "kinderdijk": [
    { title: "Mill Network at Kinderdijk-Elshout", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/818" },
    { title: "Kinderdijk: Heritage and Water Management", type: "book", author: "Stichting Werelderfgoed Kinderdijk", year: "2010", publisher: "Kinderdijk Foundation" },
  ],
  "hama-norias": [
    { title: "The Norias of Hama", type: "archaeological", author: "T. Schiøler", year: "1973", publisher: "Acta Historica Scientiarum Naturalium" },
    { title: "Water Wheels of Hama: A Dying Technology", type: "journal", author: "R. Lightfoot", year: "1996", publisher: "Technology and Culture" },
  ],
  "hanging-gardens": [
    { title: "The Mystery of the Hanging Garden of Babylon", type: "book", author: "S. Dalley", year: "2013", publisher: "Oxford University Press" },
    { title: "Hanging Gardens at Nineveh or Babylon?", type: "journal", author: "S. Dalley", year: "1994", publisher: "Iraq, British School of Archaeology in Iraq" },
  ],
  "angkor-canal-system": [
    { title: "Greater Angkor Project: Hydraulic Landscape", type: "journal", author: "R. Fletcher et al.", year: "2008", publisher: "Antiquity" },
    { title: "Angkor", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/668" },
  ],
  "hittite-clay-dams": [
    { title: "Water Engineering in the Hittite Capital Hattusa", type: "journal", author: "A. Schachner", year: "2009", publisher: "German Archaeological Institute" },
    { title: "Hattusha: The Hittite Capital", type: "unesco", publisher: "UNESCO World Heritage Centre", url: "https://whc.unesco.org/en/list/377" },
  ],
  "yu-flood-control": [
    { title: "Yu the Great and Flood Control in Ancient China", type: "book", author: "S. Allan", year: "1991", publisher: "SUNY Press" },
    { title: "The Flood Myths of Early China", type: "academic", author: "M.E. Lewis", year: "2006", publisher: "SUNY Press" },
  ],
  "hbr-masani-dam": [
    { title: "Dams of the Ancient World", type: "journal", author: "N. Schnitter", year: "1994", publisher: "International Commission on Large Dams (ICOLD)" },
    { title: "Ancient Dams of the Wadi al-Jizzi", type: "archaeological", author: "N.A. al-Tikriti", year: "2010", publisher: "Proceedings of the Seminar for Arabian Studies" },
  ],
  "mongke-khan-fountain": [
    { title: "The Journey of William of Rubruck", type: "book", author: "William of Rubruck", year: "1253 CE", publisher: "Translated by P. Jackson, Hakluyt Society, 1990" },
    { title: "The Mongol Empire and Its Legacy", type: "academic", author: "R. Amitai-Preiss & D. Morgan", year: "1999", publisher: "Brill, Leiden" },
  ],
  "sacred-wells": [
    { title: "The Nuragic Sacred Wells of Sardinia", type: "journal", author: "G. Webster", year: "2015", publisher: "Oxford Journal of Archaeology" },
    { title: "Nuragic Architecture: Form and Function", type: "book", author: "G. Lilliu", year: "1988", publisher: "Carlo Delfino Editore" },
  ],
};

export function getReferencesForInvention(artifactId: string): Reference[] {
  return inventionReferences[artifactId] || [];
}

export function getReferenceTypeLabel(type: Reference["type"]): string {
  const labels: Record<Reference["type"], string> = {
    academic: "Academic Paper",
    archaeological: "Archaeological Report",
    museum: "Museum Collection",
    book: "Published Book",
    unesco: "UNESCO Heritage",
    journal: "Journal Article",
  };
  return labels[type] || type;
}

export function getReferenceTypeColor(type: Reference["type"]): string {
  const colors: Record<Reference["type"], string> = {
    academic: "bg-[var(--cerulean)]/20 text-[var(--cerulean)]",
    archaeological: "bg-[var(--terracotta)]/20 text-[var(--terracotta)]",
    museum: "bg-purple-500/20 text-purple-300",
    book: "bg-[var(--gold)]/20 text-[var(--gold)]",
    unesco: "bg-green-500/20 text-green-300",
    journal: "bg-blue-400/20 text-blue-300",
  };
  return colors[type] || "";
}

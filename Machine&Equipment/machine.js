// Machines Data
const machinesData = [
    {
        id: 1,
        srNo: 1,
        name: "Hydraulic Press",
        make: "LVD",
        model: "PPN 300T",
        capacity: "300 Ton",
        specifications: "Programmable, CNC Controlled",
        location: "Press Shop - Bay 1",
        image: "https://images.unsplash.com/photo-1581092588576-12e700c0c9b8?w=800&h=600&fit=crop",
        isCritical: true,
        description: "High-capacity 300-ton hydraulic press for heavy-duty metal forming and stamping operations. Features programmable controls and precision pressure management."
    },
    {
        id: 2,
        srNo: 2,
        name: "Rotary Welding SPM",
        make: "Esab",
        model: "RWS-250",
        capacity: "250 kg",
        specifications: "4-Station Rotary, MIG/TIG",
        location: "Welding Section - Bay 3",
        image: "https://images.pexels.com/photos/5691632/pexels-photo-5691632.jpeg?w=800&h=600&fit=crop",
        isCritical: true,
        description: "Special Purpose Machine with 4-station rotary table for high-volume welding operations. Capable of both MIG and TIG welding processes."
    },
    {
        id: 3,
        srNo: 3,
        name: "Powder Coating Booth",
        make: "Wagner",
        model: "PCB-1200",
        capacity: "1200x800x600 mm",
        specifications: "Automatic Spray, Curing Oven",
        location: "Finishing Section - Bay 5",
        image: "https://images.pexels.com/photos/4144773/pexels-photo-4144773.jpeg?w=800&h=600&fit=crop",
        isCritical: true,
        description: "Complete powder coating system with automatic spray guns, recovery system, and integrated curing oven for superior surface finishing."
    },
    {
        id: 4,
        srNo: 4,
        name: "CNC Laser Cutter",
        make: "Bystronic",
        model: "BySprint Fiber 3015",
        capacity: "3000x1500 mm",
        specifications: "3kW Fiber Laser",
        location: "Cutting Section - Bay 2",
        image: "https://images.unsplash.com/photo-1581092160562-2e8e0d2c6d4a?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    },
    {
        id: 5,
        srNo: 5,
        name: "CNC Turret Punch",
        make: "Amada",
        model: "VIPROS 358",
        capacity: "30 Station Turret",
        specifications: "35 Ton, 1250mm Bed",
        location: "Punching Section - Bay 2",
        image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    },
    {
        id: 6,
        srNo: 6,
        name: "Press Brake",
        make: "TRUMPF",
        model: "TruBend 5130",
        capacity: "130 Ton",
        specifications: "6-Axis CNC Back Gauge",
        location: "Bending Section - Bay 4",
        image: "https://images.pexels.com/photos/4144774/pexels-photo-4144774.jpeg?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    },
    {
        id: 7,
        srNo: 7,
        name: "Shearing Machine",
        make: "Cincinnati",
        model: "CMS-2500",
        capacity: "2500 mm",
        specifications: "Hydraulic, 6mm Capacity",
        location: "Cutting Section - Bay 2",
        image: "https://images.unsplash.com/photo-1581092921461-6b7e0b8d6e8a?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    },
    {
        id: 8,
        srNo: 8,
        name: "Spot Welding Machine",
        make: "RMC",
        model: "SW-150",
        capacity: "150 kVA",
        specifications: "Pneumatic, Timer Control",
        location: "Welding Section - Bay 3",
        image: "https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    },
    {
        id: 9,
        srNo: 9,
        name: "Surface Grinder",
        make: "Okamoto",
        model: "PSG-125DX",
        capacity: "300x600 mm",
        specifications: "Precision Grinding",
        location: "Tool Room - Bay 6",
        image: "https://images.unsplash.com/photo-1581094797147-4e0f7b5c86c7?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    },
    {
        id: 10,
        srNo: 10,
        name: "CMM Machine",
        make: "Mitutoyo",
        model: "Crysta-Apex S 121210",
        capacity: "1200x1200x1000 mm",
        specifications: "3D Measurement",
        location: "Quality Lab - Bay 7",
        image: "https://images.unsplash.com/photo-1581094484282-9e7e16e6d1b8?w=800&h=600&fit=crop",
        isCritical: false,
        description: ""
    }
];

// Initialize Machines Page
function initializeMachinesPage() {
    populateMachinesTable();
    populateCriticalMachines();
    addEventListeners();
}

// Populate Machines Table
function populateMachinesTable() {
    const tableBody = document.getElementById('machines-table-body');
    
    if (!tableBody) return;
    
    tableBody.innerHTML = machinesData.map(machine => `
        <tr class="table-row-hover table-row-animate" data-machine-id="${machine.id}">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${machine.srNo}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                ${machine.name}
                <div class="text-xs text-gray-500">${machine.make}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${machine.model}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                <span class="capacity-badge">${machine.capacity}</span>
                ${machine.specifications ? `<div class="text-xs text-gray-500 mt-1">${machine.specifications}</div>` : ''}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${machine.location}</td>
        </tr>
    `).join('');
}

// Populate Critical Machines Section - ONLY TEXT COLOR CHANGED TO WHITE
function populateCriticalMachines() {
    const criticalMachinesContainer = document.getElementById('critical-machines');
    const criticalMachines = machinesData.filter(machine => machine.isCritical);
    
    if (!criticalMachinesContainer) return;
    
    criticalMachinesContainer.innerHTML = criticalMachines.map(machine => `
        <div class="machine-card critical-machine bg-[#0f172a]">
            <div class="flex flex-col lg:flex-row gap-6 ">
                <div class="lg:w-2/5">
                    <div class="machine-image-container bg-gray-100 rounded-lg flex items-center justify-center h-48">
                        ${machine.image ? 
                            `<img src="${machine.image}" alt="${machine.name}" class="machine-image w-full h-full object-cover" onerror="this.style.display='none'">` :
                            `<div class="text-gray-400 text-center">
                                <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                </svg>
                                <span class="text-sm">Image Not Available</span>
                            </div>`
                        }
                    </div>
                </div>
                <div class="lg:w-3/5">
                    <h4 class="text-xl font-bold text-white mb-2">${machine.name} - ${machine.model}</h4>
                    <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                            <span class="font-semibold text-gray-300">Make:</span>
                            <span class="text-white ml-2">${machine.make}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-gray-300">Capacity:</span>
                            <span class="text-white ml-2">${machine.capacity}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-gray-300">Location:</span>
                            <span class="text-white ml-2">${machine.location}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-gray-300">Specifications:</span>
                            <span class="text-white ml-2">${machine.specifications}</span>
                        </div>
                    </div>
                    <p class="text-white text-sm leading-relaxed">${machine.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Add Event Listeners
function addEventListeners() {
    const tableRows = document.querySelectorAll('[data-machine-id]');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const machineId = this.getAttribute('data-machine-id');
            const machine = machinesData.find(m => m.id == machineId);
            if (machine) {
                if (machine.isCritical) {
                    document.getElementById('critical-machines').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMachinesPage);
} else {
    initializeMachinesPage();
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { machinesData, initializeMachinesPage };
}
import React, { useState, useEffect } from 'react';
import { Search, Filter, Share, Calendar, Plus, Edit, MoreVertical, Trash2, Star, MapPin, Home, Users, Eye, CheckCircle, X } from 'lucide-react';

const PropertyManagement = () => {
  const [activeTab, setActiveTab] = useState('leased');
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [showAddUnit, setShowAddUnit] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentStep, setCurrentStep] = useState('property'); // 'property', 'unit', 'success'

  const properties = [
    {
      id: 1,
      name: 'The Spring Lodge',
      type: 'Condo Apartment',
      address: '24, Commercial Avenue, Kampala',
      rentals: 7,
      rating: 4.5,
      description: 'Bright, spacious 2-bedroom apartment in a quiet neighborhood. Close to shops, restaurants, and public transportation.',
      image: '/api/placeholder/300/200',
      status: 'leased',
      tenants: [
        { id: 1, name: 'John Doe', avatar: '/api/placeholder/40/40' },
        { id: 2, name: 'Jane Smith', avatar: '/api/placeholder/40/40' }
      ]
    },
    {
      id: 2,
      name: 'The Modern Oasis',
      type: 'Condo Apartment',
      address: '15, Commercial Avenue, Kampala',
      rentals: 15,
      rating: 4.2,
      description: 'Bright, spacious 2-bedroom apartment in a quiet neighborhood. Close to shops, restaurants, and public transportation.',
      image: '/api/placeholder/300/200',
      status: 'leased'
    },
    {
      id: 3,
      name: 'The Urban Loft',
      type: 'Condo Apartment',
      address: '24, Commercial Avenue, Kampala',
      rentals: 6,
      rating: 4.8,
      description: 'Bright, spacious 2-bedroom apartment in a quiet neighborhood. Close to shops, restaurants, and public transportation.',
      image: '/api/placeholder/300/200',
      status: 'leased'
    },
    {
      id: 4,
      name: 'The Tuscan Estate',
      type: 'Condo Apartment',
      address: '24, Commercial Avenue, Kampala',
      rentals: 8,
      rating: 4.3,
      description: 'Bright, spacious 2-bedroom apartment in a quiet neighborhood. Close to shops, restaurants, and public transportation.',
      image: '/api/placeholder/300/200',
      status: 'leased'
    },
    {
      id: 5,
      name: 'The Bohemian Villa',
      type: 'Condo Apartment',
      address: '24, Commercial Avenue, Kampala',
      rentals: 5,
      rating: 4.6,
      description: 'Bright, spacious 2-bedroom apartment in a quiet neighborhood. Close to shops, restaurants, and public transportation.',
      image: '/api/placeholder/300/200',
      status: 'leased'
    }
  ];

  const PropertyCard = ({ property }:any) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-gray-900 text-white px-2 py-1 rounded text-sm">
          {property.rentals} Rentals
        </div>
        <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded text-sm">
          Perfect (10)
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{property.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Home className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{property.type}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{property.address}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {property.description}
        </p>
        {property.tenants && (
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-gray-400" />
            <div className="flex -space-x-2">
              {property.tenants.map((tenant:any, index:any) => (
                <img
                  key={tenant.id}
                  src={tenant.avatar}
                  alt={tenant.name}
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">+{property.tenants.length}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-green-100 text-green-600 rounded text-sm">
              AVAILABLE
            </button>
            <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm">
              OCCUPIED
            </button>
          </div>
          <button 
            onClick={() => setSelectedProperty(property)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  const PropertyDetails = ({ property, onClose }:any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Property Details</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="relative mb-4">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-gray-900 text-white px-2 py-1 rounded text-sm">
                  {property.rentals} Rentals
                </div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded text-sm">
                  Perfect (10)
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{property.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-600">{property.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <Home className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{property.type}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{property.address}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{property.description}</p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Features</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Parking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">WiFi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Security</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Tenants</h4>
                {property.tenants && property.tenants.map((tenant:any) => (
                  <div key={tenant.id} className="flex items-center gap-3 mb-2">
                    <img
                      src={tenant.avatar}
                      alt={tenant.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm">{tenant.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Service Requests</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Electrical Appliances</span>
                    <span className="text-xs text-blue-600">View Details</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Leaking Pipe</span>
                    <span className="text-xs text-blue-600">View Details</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Painting</span>
                    <span className="text-xs text-blue-600">View Details</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <button className="w-full bg-red-50 text-red-600 py-3 rounded-lg hover:bg-red-100 transition-colors">
                  Delete Property
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Request Service Provider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AddPropertyForm = ({ onClose, onNext }:any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Add Property</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Ex: The Spring Lodge"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  placeholder="Ex: 24, Commercial Avenue"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>House</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Structure *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Condominium</option>
                  <option>Detached</option>
                  <option>Townhouse</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of units *
                </label>
                <input
                  type="number"
                  placeholder="Ex: 3 units"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                placeholder="Description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Features
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Parking</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">WiFi</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Security</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Garden</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Gym</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Pool</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Balcony</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Elevator</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Generator</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Property Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <div className="text-gray-400 mb-2">
                  <Plus className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-sm text-gray-600">Click to upload images</p>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onNext}
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Add Unit
              </button>
              <button
                type="submit"
                className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const AddUnitForm = ({ onClose, onSubmit }:any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Add Unit</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600">Unit Information: The Spring Lodge</p>
            <p className="text-sm text-green-600">2 Number: Available</p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unit Name
              </label>
              <input
                type="text"
                placeholder="Unit Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedroom
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>2 Bedroom</option>
                  <option>1 Bedroom</option>
                  <option>3 Bedroom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bathrooms *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>2 Bathroom</option>
                  <option>1 Bathroom</option>
                  <option>3 Bathroom</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Toilet *
                </label>
                <input
                  type="number"
                  placeholder="ex: 2 Toilets"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Store *
                </label>
                <input
                  type="number"
                  placeholder="ex: 2 Store"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Light Meter No. *
                </label>
                <input
                  type="text"
                  placeholder="Light Meter No."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Water Meter No. *
                </label>
                <input
                  type="text"
                  placeholder="Water Meter No."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description *
              </label>
              <textarea
                placeholder="Description"
                  rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Features
              </label>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Parking</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">WiFi</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Security</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Garden</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Balcony</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Generator</span>
                </label>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">Cost for rent</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Cost *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-16"
                    />
                    <span className="absolute right-3 top-2 text-sm text-gray-500">UGX/month</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Extra Charges *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
                    />
                    <span className="absolute right-3 top-2 text-sm text-gray-500">UGX</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax *
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
                    />
                    <span className="absolute right-3 top-2 text-sm text-gray-500">UGX</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Unit Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <div className="text-gray-400 mb-2">
                  <Plus className="w-8 h-8 mx-auto" />
                </div>
                <p className="text-sm text-gray-600">Click to upload images</p>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Add Unit
              </button>
              <button
                type="button"
                onClick={onSubmit}
                className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const SuccessModal = ({ onClose }:any) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 p-6 text-center">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Successful</h3>
          <p className="text-gray-600 text-sm">Your Property and Unit have been successfully added!</p>
        </div>
        <div className="space-y-2">
          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            View Property
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Share className="w-4 h-4" />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Calendar className="w-4 h-4" />
                Jul 2025
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('leased')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'leased'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Leased (5)
          </button>
          <button
            onClick={() => setActiveTab('vacant')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'vacant'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Vacant (2)
          </button>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Add Property Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAddProperty(true)}
            className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            Add Property
          </button>
        </div>
      </div>

      {/* Modals */}
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {showAddProperty && (
        <AddPropertyForm
          onClose={() => setShowAddProperty(false)}
          onNext={() => {
            setShowAddProperty(false);
            setShowAddUnit(true);
          }}
        />
      )}

      {showAddUnit && (
        <AddUnitForm
          onClose={() => setShowAddUnit(false)}
          onSubmit={() => {
            setShowAddUnit(false);
            setShowSuccessModal(true);
          }}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>

    );
  };
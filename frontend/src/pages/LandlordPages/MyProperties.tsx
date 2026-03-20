import { useEffect, useState } from "react"
import { UserButton } from "@clerk/clerk-react"
import Sidebar from "../../components/LandlordComponents/Sidebar"
import { useLandlordAuthStore } from "../../store/LandlordAuthStore"
import AddPropertyModal from "../../components/LandlordComponents/AddpropertyModal"
import { useLandlordPropertyStore } from "../../store/landlord/LandlordPrpertyStore"

export default function MyProperties() {
  const profile = useLandlordAuthStore((s) => s.profile)
  const [showModal, setShowModal] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [editingProperty, setEditingProperty] = useState<any | null>(null)
  const { properties, fetchLandlordProperties, isLoading, deleteProperty } = useLandlordPropertyStore()

  useEffect(() => {
    fetchLandlordProperties();
    console.log(properties)
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this property?")
    if (!confirmed) return
    setDeletingId(id)
    await deleteProperty(id)
    setDeletingId(null)
  }

  return (
    <section>
      <div className="grid grid-cols-6">
        <section className="col-span-1">
          <Sidebar />
        </section>
        <section className="col-span-5 bg-[#f8f8f8] min-h-screen">

          {/* Topbar */}
          <div className="flex border-b border-gray-200 py-2 bg-white">
            <span className="flex justify-between items-center w-[90%] mx-auto">
              <input type="text" className="border border-gray-200 rounded-md py-1 px-4 text-sm" placeholder="Search..." />
              <div className="flex gap-2 border-l border-gray-200 pl-3 items-center">
                <UserButton />
                <p className="text-gray-700 text-sm">{profile?.first_name} {profile?.last_name}</p>
              </div>
            </span>
          </div>

          {/* Content */}
          <div className="w-[90%] mx-auto mt-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">My Properties</h1>
                <p className="text-sm text-gray-400 mt-1">All your listings, in one place</p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#32cddb] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#32cddb]/20 hover:bg-[#32cddb]/90 transition-all"
              >
                + Add Listing
              </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Property</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Listing Type</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Date Added</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    // Loading skeleton
                    [...Array(3)].map((_, i) => (
                      <tr key={i} className="border-b border-gray-50 animate-pulse">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gray-100" />
                            <div className="space-y-2">
                              <div className="h-3 w-32 bg-gray-100 rounded" />
                              <div className="h-2 w-20 bg-gray-100 rounded" />
                            </div>
                          </div>
                        </td>
                        {[...Array(4)].map((_, j) => (
                          <td key={j} className="px-6 py-4">
                            <div className="h-3 w-20 bg-gray-100 rounded" />
                          </td>
                        ))}
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <div className="h-7 w-12 bg-gray-100 rounded-lg" />
                            <div className="h-7 w-14 bg-gray-100 rounded-lg" />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : properties.length === 0 ? (
                    // Empty state
                    <tr>
                      <td colSpan={6}>
                        <div className="flex flex-col items-center justify-center py-20 px-6">
                          <div className="w-20 h-20 rounded-2xl bg-[#94e5ec]/20 flex items-center justify-center mb-5">
                            <span className="text-4xl">🏠</span>
                          </div>
                          <h3 className="text-gray-700 font-semibold text-lg mb-1">No listings yet</h3>
                          <p className="text-gray-400 text-sm text-center max-w-xs mb-6">
                            You haven't added any properties yet. Start by listing your first property.
                          </p>
                          <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-2 px-6 py-2.5 bg-[#32cddb] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#32cddb]/20 hover:bg-[#32cddb]/90 transition-all"
                          >
                            + Add Your First Listing
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    properties.map((property) => (
                      <tr key={property.id} className="border-b border-gray-50 hover:bg-gray-50 transition-all">

                        {/* Property */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {property.images?.[0] ? (
                              <img
                                src={property.images[0].url}
                                alt={property.title}
                                className="w-[5rem] rounded-lg object-cover shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-[#94e5ec]/20 flex items-center justify-center shrink-0">
                                <span className="text-xl">🏠</span>
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-gray-800 truncate max-w-[180px]">{property.title}</p>
                              <p className="text-xs text-gray-400">{property.bedrooms} bed · {property.bathrooms} bath</p>
                            </div>
                          </div>
                        </td>

                        {/* Location */}
                        <td className="px-6 py-4">
                          <p className="text-gray-700">{property.city}</p>
                          <p className="text-xs text-gray-400">{property.neighbourhood}</p>
                        </td>

                        {/* Listing Type */}
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold
                            ${property.category === "rent"
                              ? "bg-[#94e5ec]/20 text-[#32cddb]"
                              : "bg-orange-100 text-orange-500"
                            }`}>
                            {property.category === "rent" ? "For Rent" : "For Sale"}
                          </span>
                        </td>

                        {/* Price */}
                        <td className="px-6 py-4">
                          <p className="font-semibold text-gray-800">
                            £{Number(property.price).toLocaleString()}
                          </p>
                          {property.category === "rent" && (
                            <p className="text-xs text-gray-400">/month</p>
                          )}
                        </td>

                        {/* Date Added */}
                        <td className="px-6 py-4 text-gray-500">
                          {new Date(property.created_at).toLocaleDateString("en-GB", {
                            day: "numeric", month: "short", year: "numeric"
                          })}
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingProperty(property)}
                              className="px-3 py-1.5 text-xs font-medium text-[#32cddb] border border-[#32cddb] rounded-lg hover:bg-[#32cddb] hover:text-white transition-all"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(property.id)}
                              disabled={deletingId === property.id}
                              className="px-3 py-1.5 text-xs font-medium text-red-400 border border-red-200 rounded-lg hover:bg-red-500 hover:text-white transition-all disabled:opacity-50"
                            >
                              {deletingId === property.id ? "..." : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Add Modal */}
      {showModal && (
        <AddPropertyModal onClose={() => {
          setShowModal(false)
          fetchLandlordProperties() // ✅ refresh after adding
        }} />
      )}

      {/* Edit Modal */}
      {editingProperty && (
        <AddPropertyModal
            property={editingProperty}  // ✅ pass it here

          onClose={() => {
            setEditingProperty(null)
            fetchLandlordProperties() // ✅ refresh after editing
          }}
        />
      )}
    </section>
  )
}
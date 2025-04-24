import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms  & Conditions - Paphos Sea Cruises",
  description: "Terms and conditions for Paphos Sea Cruises",
}

export default function TermsConditions() {
  return (
    <div className="">
      <div className="relative h-[450px] ">
        <Image
          src="/backgrounds/blue.jpg"
          alt="Blue wave background"
          fill
          className=""
          priority
        />

        {/* Tours Title */}
        <div className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-white text-4xl md:text-6xl font-sans font-bold">
            Terms & Conditions
          </h1>
        </div>
      </div>

      <div className="terms-and-conditions px-4 max-w-7xl font-sans pb-12 mx-auto text-gray-800 ">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Deposits and Payments</h2>
      <p>The lead person on the booking will be responsible for the full cost of the cruise, including any amendments or cancellations. Payment of the deposit indicates acceptance of our quotation and confirms that you have the authority to accept these booking conditions on behalf of your party. Any discrepancies must be reported immediately. The remaining balance must be paid before boarding at the ticket box office.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Price</h2>
      <p>We reserve the right to amend our prices at any time prior to booking.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Alteration or Cancellation by You</h2>
      <p>If you wish to alter your cruise booking, we will make every effort to accommodate the changes. Requests must be submitted in writing by the person who booked the ticket. Cancellations are non-refundable unless notice is given at least 12 hours before the cruise via email or telephone. Deposits are non-refundable.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Special Requests</h2>
      <p>If you have any special requests (e.g., dietary), please submit them in writing at least 48 hours before the cruise to avoid any confusion.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Alteration or Cancellation by Us</h2>
      <p>In case of severe weather, damage to the yacht, or other unforeseen circumstances, we reserve the right to cancel the cruise up to and including the cruise date. We will offer alternative dates or a different yacht. If no suitable alternative is found, a full refund will be issued as the sole remedy. In the event the yacht is unavailable upon your arrival due to reasons beyond our control (e.g., prior damage, crew illness), we may substitute a similar or better yacht. No compensation is payable for minor changes.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Yacht Insurance</h2>
      <p>The yacht and inventory are covered by marine insurance against loss, damage, and third-party liability. Passengers must exercise reasonable care. Liability is limited to the security deposit unless damage results from negligence or intentional misconduct. We do not cover personal injury, illness, loss of belongings, or cancellation. Passengers should arrange their own insurance.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Act of God</h2>
      <p>We hold no responsibility for cancellations or delays due to natural causes beyond human control, such as earthquakes, floods, tornadoes, or other unforeseeable events.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Complaints</h2>
      <p>If you encounter a problem during the cruise, please inform the skipper immediately. If unresolved, contact our office by phone or email. Failure to do so may affect your right to compensation.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Authority</h2>
      <p>The skipper has full authority on board and must be obeyed at all times. The skipper has sole judgment regarding seamanship and yacht safety. If you fail to comply with the skipper’s reasonable instructions, the cruise may be terminated without refund or further remedy.</p>
    </div>


    </div>
  );
}

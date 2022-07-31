import dynamic from "next/dynamic";

const Model = dynamic(() => import("../components/Model"), { ssr: false });
export default function Home() {
  return (
    <div>
      <div className="product">
        <Model
          src="/wooden-coffe-table.gltf"
          alt="cofee-table"
          title="Craftlia Wooden Coffee Table for Living Room I Central Table I Side Table (24x24x17 Inch, Metal Base, Wooden Top)"
          current="-23% ₹2,699.00"
          old="M.R.P.: ₹3,500.00"
          description="This multipurpose table can be used for any showpiece on it , plant stand and more
          Mango wood Folding Table / Side Table / Coffee Table/Kids Study Table/Stool/ Plant Stand"
        />

        <Model
          src="/apple-watch-fbx.gltf"
          alt="apple-watch"
          title="Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Midnight Sport Band - Regular"
          current="-23% ₹22,900.00"
          old="M.R.P.: ₹29,900.00"
          description="Take calls and reply to texts, right from your wrist
          Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone
          Track new tai chi and pilates workouts, in addition to favourites like running, yoga, swimming and dance
          Hike smarter with built-in compass and real-time elevation readings
          Stay on top of your health with high and low heart rate, and irregular heart rhythm notifications
          Apple Watch can detect if you’ve taken a hard fall, then automatically call emergency"
        />

        <Model
          src="/fixed-bag-fbx.gltf"
          title="Lapis O Lupo Women Fashion Handbags Faux Leather Top Handle Satchel Purse With Sling"
          current="-61% ₹1,669.00"
          old="M.R.P.: ₹2,999.00"
          description="Outer Material: Polyurethane(PU); Inner Material: Polyster
          HxLxD(CM)-23x31x15
          Closure Type: Zip closure
          Compartment-3;Zip Pocket-3
          Easy to carry traveling essentials like mobile phone, keys, wallet, and other accessories."
        />

        <Model
          src="/flat-screen-lcd-tv-fbx.gltf"
          title="Westinghouse 80 cm (32 inches) HD Ready Smart Certified Android LED TV WH32SP12 (Black)"
          current="-37% ₹10,999.00"
          old="M.R.P.: ₹17,499.00"
          description="Resolution : HD Ready (1366 x 768) resolution | Refresh Rate : 60 Hertz | 178 Degree wide viewing angle
          Connectivity: 3 HDMI ports to connect set top box, Blu-ray speakers or a gaming console | 2 USB ports to connect hard drives or other USB devices
          Sound: 24 Watts Output | Powerful Speakers with Crystal clear Audio
          Smart TV Features : Google Voice Assistance | Android 9.0 Pie | Smart Remote | Apps: YouTube, Prime Video, Hotstar, Zee5, SonyLiv and more | Display Mirroring for compatible devices
          Display : Durable A+ Grade DLED panel | Ultra bright screen for flawless picture quality even in bright rooms
          Warranty Information: 1 Year warranty provided by Westinghouse TV from date of purchase
          Easy Returns: This product is eligible for replacement within 10 days of delivery in case of any product defects, damage or features not matching the description"
        />

        <Model
          src="/nike-air-max-low-poly.gltf"
          alt="nike-air-max"
          title="Nike Air Max 90 Womens Running Shoe"
          current="-23% ₹66,529.00"
          old="M.R.P.: ₹81,345.00"
          description="Product Dimensions ‏ : ‎ 33 x 23 x 11 cm; 750 Grams
          Date First Available ‏ : ‎ 30 January 2021
          Manufacturer ‏ : ‎ Nike
          ASIN ‏ : ‎ B07ZJKSWPN
          Item model number ‏ : ‎ AT4662-406
          Country of Origin ‏ : ‎ Vietnam
          Department ‏ : ‎ Unisex-child
          Manufacturer ‏ : ‎ Nike
          Item Weight ‏ : ‎ 750 g
          Item Dimensions LxWxH ‏ : ‎ 33 x 23 x 11 Centimeters
          Net Quantity ‏ : ‎ 1 Set
          Generic Name ‏ : ‎ YOUNG ATHLETES"
        />

        <Model
          src="/recliner-sofa-fbx.gltf"
          alt="Recliner-Sofa"
          title="Amazon Brand - Solimo Delphi 3 Seater Leatherette Fabric Recliner (Black)"
          current="-41% ₹25,601.00"
          old="M.R.P.: ₹36,299.00"
          description="Comes with 2 comfortable reclining side seats and 1 non-reclining center seat in high-quality leatherette fabric
          Made with strong and durable seams to ensure longevity. Leatherette does not lose color with rubbing
          Passed durability testing with 100 kg on each seat and backrest for 25,000 cycles; Passed armrest stability testing with 40 kg dynamic loading for 10,000 cycles
          Meets the European Standard EN 1728 for performance and stringent European Safety Requirement Standard EN 12520
          Warranty on manufacturing defects: 3 years
          Maximum weight load per seat: 160 kg
          Free from harmful chemicals like formaldehyde, AZO Dye and lead
          Lightweight recliner for easy shifting"
        />

     
      </div>
    </div>
  );
}

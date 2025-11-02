#!/bin/bash

# Script to find and test Wikimedia Commons URLs for artwork images

echo "Testing Wikimedia Commons image URLs..."
echo "========================================"
echo ""

# Array of artwork filenames to test
declare -A artworks=(
  ["Tintoretto_Last_Supper"]="Jacopo_Tintoretto_-_The_Last_Supper_-_WGA22649.jpg"
  ["Ciseri_Melchizedek"]="Antonio_Ciseri_Melchizedek_Blessing_Abraham.jpg"
  ["Juan_Flandes_Manna"]="Juan_de_Flandes_Gathering_Manna.jpg"
  ["Dore_Sennacherib"]="101.Sennacherib's_Army_Is_Destroyed.jpg"
  ["Dore_Passover"]="Gustave_Doré_The_Passover.jpg"
  ["Ghirlandaio_Last_Supper"]="Ghirlandaio,_ultima_cena_di_san_marco.jpg"
  ["Veronese_Wedding_Cana"]="Paolo_Veronese_008.jpg"
  ["Tissot_Loaves_Fishes"]="Brooklyn_Museum_-_The_Miracle_of_the_Loaves_and_Fishes_(La_multiplication_des_pains)_by_James_Tissot.jpg"
  ["Momper_Loaves_Fishes"]="Joos_de_Momper_Loaves_Fishes.jpg"
  ["Tintoretto_Loaves_Fishes"]="Jacopo_Tintoretto_Miracle_Loaves_Fishes.jpg"
  ["Lorenzetti_Crucifixion"]="Pietro_Lorenzetti-Crucifixion.jpg"
  ["Tissot_Cross"]="James_Tissot_What_Our_Lord_Saw_from_the_Cross.jpg"
  ["Bassano_Last_Supper"]="Jacopo_Bassano_Last_Supper_1542.jpeg"
  ["Veronese_Emmaus"]="Paolo_Veronese_Supper_Emmaus.jpg"
  ["Durer_Adoration"]="Albrecht_Dürer_Adoration_Trinity.jpg"
  ["Rubens_Four_Doctors"]="Peter_Paul_Rubens_Four_Doctors.jpg"
  ["Michelangelo_Entombment"]="Michelangelo_Entombment.jpg"
  ["Subleyras_Mass_Basil"]="Pierre_Subleyras_Mass_St_Basil.jpg"
  ["Gozzoli_Augustine"]="Benozzo_Gozzoli_St_Augustine_Baptism.jpg"
  ["Champaigne_Augustine"]="Philippe_de_Champaigne_Saint_Augustine.jpg"
  ["Ghent_Communion"]="Justus_van_Ghent_Communion_Apostles.jpg"
)

# Function to calculate MD5 and test URL
test_url() {
  local name=$1
  local filename=$2
  
  # Calculate MD5 hash
  local hash=$(echo -n "$filename" | md5sum | cut -d' ' -f1)
  local first=${hash:0:1}
  local firsttwo=${hash:0:2}
  local url="https://upload.wikimedia.org/wikipedia/commons/$first/$firsttwo/$filename"
  
  # Test URL
  local status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  
  if [ "$status" = "200" ]; then
    echo "✅ $name"
    echo "   File: $filename"
    echo "   URL: $url"
    echo ""
  else
    echo "❌ $name: HTTP $status"
    echo "   File: $filename"
    echo ""
  fi
}

# Test all artworks
for name in "${!artworks[@]}"; do
  test_url "$name" "${artworks[$name]}"
done

echo "========================================"
echo "Testing complete!"

#!/bin/bash
# Post-build fix: rename @ in Astro CSS filenames and update HTML references
cd "$(dirname "$0")/dist/_astro"
for f in *@*; do
  [ -e "$f" ] || continue
  NEW=$(echo "$f" | sed 's/@/_/g')
  mv "$f" "$NEW"
  cd ../
  sed -i "s|$f|$NEW|g" index.html
  cd _astro
done
echo "Build paths fixed"

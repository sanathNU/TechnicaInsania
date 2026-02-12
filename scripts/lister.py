import os
import json
try:
    from PIL import Image
    from pillow_heif import register_heif_opener
    register_heif_opener()
except ImportError as e:
    print("Got import error", e)
    print("You need to install pillow and pillow-heif: `pip3 install pillow pillow-heif`")
    import sys; sys.exit(1);

files = []
# Modified to iterate only within the 'vibes' directory
for file in os.listdir("vibes"):
    # Construct the full path to the file
    file_path = os.path.join("vibes", file)
    try:
        # Check if it's actually a file before trying to open it
        if os.path.isfile(file_path):
            im = Image.open(file_path)
            # Store the filename relative to the root, but use the full path for opening
            files.append([file_path, [im.width, im.height]])
    except Exception as e: # e.g. .DS_Store, non-image files, etc.
        # print(f"Skipping {file_path}: {e}") # Optional: for debugging
        continue

# Write to the root directory
json.dump(files, open("image_widths_heights.json", 'w'))
print(f"Successfully created image_widths_heights.json with {len(files)} files from the 'vibes' directory.")
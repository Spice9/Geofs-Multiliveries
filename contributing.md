# Contributing Guidelines

Thank you for considering contributing to Multiliveries! Your help is greatly appreciated.

# Table of Contents:
- [Contributing Guidelines](#contributing-guidelines)
  - [Adding Liveries](#adding-liveries)
    - [UV Maps](#uv-maps)
    - [Texturing Software](#texturing-software)
    - [Steps to Create a Livery](#steps-to-create-a-livery)
  - [Adding Thumbnails for Liveries](#adding-thumbnails-for-liveries)
    - [Guidelines for Thumbnails](#guidelines-for-thumbnails)
  - [Approval Process for Liveries](#approval-process-for-liveries)
  - [Questionable Liveries](#questionable-liveries)
  - [PBR Implementation for Boeing 737-200](#pbr-implementation-for-boeing-737-200)
  - [Adding Vehicles](#adding-vehicles)
  - [Disclaimer Page Extract](#disclaimer-page-extract)
  - [Loader Functionality and Formatting Aircraft](#loader-functionality-and-formatting-aircraft)
  - [frames.json Structure](#framesjson-structure)
  - [Contributing Aircraft](#contributing-aircraft)
  - [Models Root URL](#models-root-url)
- [Initial Setup Instructions For Thumbail Generator](#initial-setup-instructions-for-thumbail-generator)
  - [Graphics Settings](#graphics-settings)
  - [Screenshot Guidelines](#screenshot-guidelines)
  - [Thumbnail Generation for Liveries](#thumbnail-generation-for-liveries)
  - [Important Notes](#important-notes)

# Adding Liveries

Liveries are texture files that are applied to the aircraft model to give it a unique appearance. To create a livery, you will need to understand how UV maps work and use texturing software to apply your design to the aircraft model.

### UV Maps

UV maps are 2D representations of the 3D model's surface. They are used to "unwrap" the model so that textures can be applied accurately. Each part of the 3D model corresponds to a specific area on the UV map. Most aircraft have UV maps available for reference.

### Texturing Software

To create a livery, you will need texturing software such as Adobe Photoshop, GIMP, or Blender. These programs allow you to paint directly onto the UV map and see the results in real-time on the 3D model.

### Steps to Create a Livery:

1. **Obtain the Aircraft UV Map**: You will need the UV Map of the aircraft you want to create a livery for. This can often be obtained from the developer of the aircraft or from the Discord server.

2. **Create a New Project in your Texturing Software**: Create a project in your texturing software and open the corresponding UV map.

3. **Create Your Design**: Use the painting tools in your texturing software to create your livery design. You can add logos, text, and other graphics to customize the look of the aircraft.

4. **Export Your Livery**: Once you are happy with your design, export the texture file in a format compatible with the simulator (e.g., PNG, JPG).

5. **Test Your Livery**: Apply your livery to the aircraft model in the simulator via the custom livery tab. Make any necessary adjustments to the texture.

6. **Share Your Livery**: If you are satisfied with your livery, you can submit it for review by uploading the texture to a file hosting service and sending it in for review on our Discord server.

### Adding Thumbnails for Liveries

There is a new folder in the repository: [thumbnails](https://github.com/Spice9/Geofs-Multiliveries/tree/main/dependencies/thumbnails).<br>
Each livery definition now includes a new value, "thumb", which should hold the URL to a thumbnail image.<br>
There is a tool for automatically generating thumbnails. More information here: [Thumbail Generator](https://github.com/Spice9/Geofs-Multiliveries/new/main#initial-setup-instructions-for-thumbail-generator)

#### Guidelines for Thumbnails:
- Thumbnails should be **UNEDITED**.
- Thumbnails should be in a **SQUARE ASPECT RATIO**.
- Thumbnails should be in **PNG or JPG FORMAT**.

Please ensure that the thumbnails follow these criteria to avoid display issues in the plugin.

## Approval Process for Liveries

- Fictional and VA liveries are not accepted without prior approval from the admin or dev team. Certain exceptions may be made for such liveries if they are significant or hsitorical in GeoFS. (Such as the GeoFS livery.)
- Blatantly low-quality liveries are not accepted. If unsure, please send a message to an admin for clarification.

## Questionable Liveries

- Questionable liveries, such as aircraft that have been involved in fatal accidents or contain offensive historical content, must be reserved for an admin to review. 
- If the admin approves the livery, it must pass through community voting.

## PBR Implementation for Boeing 737-200

For PBR liveries on the Boeing 737-200, please use the following format:<br>

```json
{
  "name": "Boeing 737-200 (Airline Name) by Creator",
  "livery": "link_to_livery",
  "mptx": "link_to_multiplayer_texture",
  "pbrComposite": "link_to_pbrMetallicRoughness_composite_map",
  "normalMap": "link_to_opengl_normal_map"
}
```
Ensure that both "pbrComposite" and "normalMap" are used in a PBR livery for compatibility. If you do not wish to implement custom PBR mapping, you can omit these properties and follow the old format.

Note on PBR Implementation
This system only works on the 737-200 currently.
Please name your 737-200 liveries with "Boeing 737-200" as the aircraft name.
If unsure, wait for a tutorial from a trusted contributor with PBR mapping skills.
Your contributions are valuable to the Multiliveries project. Thank you for helping to improve the plugin!"

# Adding Vehicles
Vehicles are added using the same format as contributing to GeoFS officially. Aircraft.json definitions must be encoded in base64 to work with the plugin.<br>
For information on contributing aircraft in general, please refer to the GeoFS documentation.<br>
Some important changes:<br>
> 1. All models must have roots pointing to a URL that hosts the model files.
> 2. aircraft.json will allow the execution of JS code.

## Disclaimer Page Extract

Please note the following restrictions when contributing to Multiliveries:

1. The code may not contain any references to the userrecord, localStorage (and cookies), or sessionStorage objects.
2. The code may not contain any references to the window object.
3. The code may not contain any references to the document object.
4. The code may not contain any references to the navigator object.
5. The code may not make web requests.
6. The code may not call eval().
7. The code may not call alert(), confirm(), or prompt().
8. The code may not use the DOM.
9. The code may not be obfuscated, minified, or otherwise made unreadable.
10. All code is manually reviewed and verified by the author before being added.
11. Nobody may push updates to the vehicle database other than Ariakim or Spice9.

## Loader Functionality and Formatting Aircraft

The aircraft loader functions have been modified to accept base64-encoded aircraft definitions. Please note the following:

- The functions are ML-dependent and may not work outside of the scope of multiliveries().
- While care has been taken to ensure proper functionality, something may break at some point since Xavier updates these functions regularly.

## frames.json Structure

The structure of frames.json should include a "frames" array with objects containing "name" and "definition" (base64 encoded definition file) properties.

# Initial Setup Instructions For Thumbail Generator

## Graphics Settings
- Maximum settings per slider:
  - FXAA
  - Drop Shadows
  - Smooth Shadows
  - Globe Lighting
- Color Enhancement to taste
- Advanced Atmosphere: ON or OFF
- Vol. Clouds: ON or OFF
- All other options are untested
- Environment Settings: AUTOMATIC (Important)

## Screenshot Guidelines
- Maximize the window
- Hide all UI panels
- Before taking screenshots, call `screenshot("test")` and check the downloaded file for any issues

## Thumbnail Generation for Liveries
- To generate thumbnails for all liveries, set `regenerateAll` to true
- Regenerating all liveries takes approximately 5 minutes for around 800 liveries

## Important Notes
- While generating liveries, GeoFS must remain in focus
- Once you are ready, call `fetchLiv()`

**Thank you for your contributions to Multiliveries!**

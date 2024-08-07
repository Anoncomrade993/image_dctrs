/* tslint:disable */
/* eslint-disable */
/**
* Represents an image that can be processed for steganography
*/
export class Image {
  free(): void;
/**
* Creates a new Image instance
*
* # Arguments
*
* * `pixels` - A Uint8Array containing the pixel data
* * `width` - The width of the image
* * `height` - The height of the image
*
* # Returns
*
* A new Image instance
* @param {Uint8Array} pixels
* @param {number} width
* @param {number} height
*/
  constructor(pixels: Uint8Array, width: number, height: number);
/**
* Embeds a message into the image using DCT-based steganography
*
* # Arguments
*
* * `message` - The message to embed
*
* # Returns
*
* A Result indicating success or failure
* @param {string} message
*/
  embed_message(message: string): void;
/**
* Extracts a hidden message from the image
*
* # Returns
*
* A Result containing the extracted message or an error
* @returns {string}
*/
  extract_message(): string;
/**
* Returns the pixel data of the image
*
* # Returns
*
* A Uint8Array containing the pixel data
* @returns {Uint8Array}
*/
  get_pixels(): Uint8Array;
}

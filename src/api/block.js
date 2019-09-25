/**
 * Methods for interacting with the Block Storage endpoints<br>
 * {@link https://www.vultr.com/api/#block}
 * @namespace block
 */

/**
 * Attach a block storage subscription to a VPS subscription. The instance will be restarted.<br>
 * The block storage volume must not be attached to any other VPS subscriptions for this to work.<br>
 * {@link https://www.vultr.com/api/#block_attach}
 * @function attach
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - ID of the block storage subscription to attach.
 * @param {number} parameters.attach_to_SUBID - ID of the VPS subscription to mount the block storage subscription to.
 * @param {string} [parameters.live='no'] - 'yes' or 'no'.  If 'yes', this will be attached to the instance without a restart (requires support from the instance's operating system).
 */
exports.attach = {
  url: '/block/attach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    attach_to_SUBID: {
      type: 'number',
      required: true
    },
    live: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Create a block storage subscription.<br>
 * {@link https://www.vultr.com/api/#block_create}
 * @function create
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} parameters.DCID - ID of the location to create this subscription in.
 * @param {number} parameters.size_gb - Size (in GB) of this subscription.
 * @param {string} [parameters.label] - Text label that will be associated with the subscription.
 */
exports.create = {
  url: '/block/create',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    DCID: {
      type: 'number',
      required: true
    },
    size_gb: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: false
    }
  }
}

/**
 * Delete a block storage subscription. All data will be permanently lost. There is no going back from this call.<br>
 * {@link https://www.vultr.com/api/#block_delete}
 * @function delete
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - ID of the block storage subscription to delete.
 */
exports.delete = {
  url: '/block/delete',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Detach a block storage subscription from the currently attached instance. The instance will be restarted.<br>
 * We do not recommend using live detaches unless you are certain that the volume has been unmounted from your operating system.<br>
 * Detaching a mounted volume may result in data loss/corruption.<br>
 * {@link https://www.vultr.com/api/#block_detach}
 * @function detach
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - ID of the block storage subscription to detach.
 */
exports.detach = {
  url: '/block/detach',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    }
  }
}

/**
 * Set the label of a block storage subscription.<br>
 * {@link https://www.vultr.com/api/#block_label_set}
 * @function setLabel
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - ID of the block storage subscription.
 * @param {string} parameters.label - Text label that will be shown in the control panel.
 */
exports.setLabel = {
  url: '/block/label_set',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    label: {
      type: 'string',
      required: true
    }
  }
}

/**
 * Retrieve a list of any active block storage subscriptions on this account.<br>
 * {@link https://www.vultr.com/api/#block_block_list}
 * @function list
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} [parameters.SUBID] - Unique identifier of a subscription. Only the subscription object will be returned.
 */
exports.list = {
  url: '/block/list',
  requestType: 'GET',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: false
    }
  }
}

/**
 * Resize the block storage volume to a new size.<br>
 * WARNING: When shrinking the volume, you must manually shrink the filesystem and partitions beforehand, or you will lose data.<br>
 * {@link https://www.vultr.com/api/#block_resize}
 * @function resize
 * @memberof block
 * @instance
 * @param {object} parameters
 * @param {number} parameters.SUBID - ID of the block storage subscription to resize.
 * @param {number} parameters.resize - New size (in GB) of the block storage subscription.
 */
exports.resize = {
  url: '/block/resize',
  requestType: 'POST',
  apiKeyRequired: true,
  parameters: {
    SUBID: {
      type: 'number',
      required: true
    },
    size_gb: {
      type: 'number',
      required: true
    }
  }
}

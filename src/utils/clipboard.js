import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'

function clipboardSuccess(el) {
  ElMessage.success({
    message: el.text +' Copy successfully',
    type: 'success'
  })
}

function clipboardError() {
  ElMessage.error('Copy failed')
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', (text) => {
    clipboardSuccess(text)
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}

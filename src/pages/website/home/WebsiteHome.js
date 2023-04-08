import WebsiteFooter from "../../../components/website/footer/WebsiteFooter";
import WebsiteHeader from "../../../components/website/header/WebsiteHeader";
import WebsiteMentor from "../../../components/website/mentor/WehsiteMentor";
import WebsiteReason from "../../../components/website/reason/WebsiteReason";

function WebsiteHome() {
    return (
        <div>
            <WebsiteHeader></WebsiteHeader>
            <div class="container">
                <WebsiteReason></WebsiteReason>
                <WebsiteMentor></WebsiteMentor>
            </div>
            <WebsiteFooter></WebsiteFooter>
        </div>
    );
}

export default WebsiteHome;
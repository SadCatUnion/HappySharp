using System.Collections;
using System.Collections.Generic;
using ImGuiNET;
using System.Numerics;


public unsafe static class GUITool
{
    public static void AlignTextToFramePadding()
    {
        ImGui.AlignTextToFramePadding();
    }
    public static bool ArrowButton(string str_id, ImGuiDir dir)
    {
        return ImGui.ArrowButton(str_id, dir);
    }
    public static bool Begin(string name, ref bool p_open, ImGuiWindowFlags flags)
    {
        return ImGui.Begin(name, ref p_open, flags);
    }
    public static bool Begin(string name, ImGuiWindowFlags flags)
    {
        return ImGui.Begin(name, flags);
    }
    public static bool Begin(string name)
    {
        return ImGui.Begin(name);
    }
    public static bool Begin(string name, ref bool p_open)
    {
        return ImGui.Begin(name, ref p_open);
    }
    // public static bool BeginChild(string str_id, Vector2 size);
    // public static bool BeginChild(uint id, Vector2 size, bool border, ImGuiWindowFlags flags);
    // public static bool BeginChild(uint id, Vector2 size, bool border);
    // public static bool BeginChild(uint id, Vector2 size);
    // public static bool BeginChild(string str_id);
    // public static bool BeginChild(string str_id, Vector2 size, bool border, ImGuiWindowFlags flags);
    // public static bool BeginChild(string str_id, Vector2 size, bool border);
    // public static bool BeginChild(uint id);
    // public static bool BeginChildFrame(uint id, Vector2 size);
    // public static bool BeginChildFrame(uint id, Vector2 size, ImGuiWindowFlags flags);
    // public static bool BeginCombo(string label, string preview_value);
    // public static bool BeginCombo(string label, string preview_value, ImGuiComboFlags flags);
    // public static bool BeginDragDropSource(ImGuiDragDropFlags flags);
    // public static bool BeginDragDropSource();
    // public static bool BeginDragDropTarget();
    // public static void BeginGroup();
    // public static bool BeginListBox(string label);
    // public static bool BeginListBox(string label, Vector2 size);
    // public static bool BeginMainMenuBar();
    // public static bool BeginMenu(string label);
    // public static bool BeginMenu(string label, bool enabled);
    // public static bool BeginMenuBar();
    // public static bool BeginPopup(string str_id);
    // public static bool BeginPopup(string str_id, ImGuiWindowFlags flags);
    // public static bool BeginPopupContextItem(string str_id, ImGuiPopupFlags popup_flags);
    // public static bool BeginPopupContextItem(string str_id);
    // public static bool BeginPopupContextItem();
    // public static bool BeginPopupContextVoid(string str_id, ImGuiPopupFlags popup_flags);
    // public static bool BeginPopupContextVoid();
    // public static bool BeginPopupContextVoid(string str_id);
    // public static bool BeginPopupContextWindow();
    // public static bool BeginPopupContextWindow(string str_id);
    // public static bool BeginPopupContextWindow(string str_id, ImGuiPopupFlags popup_flags);
    // public static bool BeginPopupModal(string name);
    // public static bool BeginPopupModal(string name, ref bool p_open);
    // public static bool BeginPopupModal(string name, ref bool p_open, ImGuiWindowFlags flags);
    // public static bool BeginTabBar(string str_id);
    // public static bool BeginTabBar(string str_id, ImGuiTabBarFlags flags);
    // public static bool BeginTabItem(string label, ref bool p_open, ImGuiTabItemFlags flags);
    // public static bool BeginTabItem(string label, ref bool p_open);
    // public static bool BeginTabItem(string label);
    // public static bool BeginTable(string str_id, int column);
    // public static bool BeginTable(string str_id, int column, ImGuiTableFlags flags);
    // public static bool BeginTable(string str_id, int column, ImGuiTableFlags flags, Vector2 outer_size);
    // public static bool BeginTable(string str_id, int column, ImGuiTableFlags flags, Vector2 outer_size, float inner_width);
    // public static void BeginTooltip();
    // public static void Bullet();
    // public static void BulletText(string fmt);
    public static bool Button(string label, Vector2 size)
    {
        return ImGui.Button(label, size);
    }
    public static bool Button(string label)
    {
        return ImGui.Button(label);
    }
    // public static float CalcItemWidth();
    // public static Vector2 CalcTextSize(string text);
    // public static Vector2 CalcTextSize(string text, float wrapWidth);
    // public static Vector2 CalcTextSize(string text, bool hideTextAfterDoubleHash);
    // public static Vector2 CalcTextSize(string text, int start, int length);
    // public static Vector2 CalcTextSize(string text, int start, bool hideTextAfterDoubleHash);
    // public static Vector2 CalcTextSize(string text, int start, float wrapWidth);
    // public static Vector2 CalcTextSize(string text, int start);
    // public static Vector2 CalcTextSize(string text, bool hideTextAfterDoubleHash, float wrapWidth);
    // public static Vector2 CalcTextSize(string text, int start, int length, bool hideTextAfterDoubleHash);
    // public static Vector2 CalcTextSize(string text, int start, int length, bool hideTextAfterDoubleHash, float wrapWidth);
    // public static Vector2 CalcTextSize(string text, int start, int length, float wrapWidth);
    // public static void CaptureKeyboardFromApp();
    // public static void CaptureKeyboardFromApp(bool want_capture_keyboard_value);
    // public static void CaptureMouseFromApp(bool want_capture_mouse_value);
    // public static void CaptureMouseFromApp();
    // public static bool Checkbox(string label, ref bool v);
    // public static bool CheckboxFlags(string label, ref uint flags, uint flags_value);
    // public static bool CheckboxFlags(string label, ref int flags, int flags_value);
    // public static void CloseCurrentPopup();
    // public static bool CollapsingHeader(string label, ref bool p_visible, ImGuiTreeNodeFlags flags);
    // public static bool CollapsingHeader(string label, ImGuiTreeNodeFlags flags);
    // public static bool CollapsingHeader(string label);
    // public static bool CollapsingHeader(string label, ref bool p_visible);
    // public static bool ColorButton(string desc_id, Vector4 col, ImGuiColorEditFlags flags);
    // public static bool ColorButton(string desc_id, Vector4 col);
    // public static bool ColorButton(string desc_id, Vector4 col, ImGuiColorEditFlags flags, Vector2 size);
    // public static uint ColorConvertFloat4ToU32(Vector4 @in);
    // public static void ColorConvertHSVtoRGB(float h, float s, float v, out float out_r, out float out_g, out float out_b);
    // public static void ColorConvertRGBtoHSV(float r, float g, float b, out float out_h, out float out_s, out float out_v);
    // public static Vector4 ColorConvertU32ToFloat4(uint @in);
    // public static bool ColorEdit3(string label, ref Vector3 col, ImGuiColorEditFlags flags);
    // public static bool ColorEdit3(string label, ref Vector3 col);
    // public static bool ColorEdit4(string label, ref Vector4 col, ImGuiColorEditFlags flags);
    // public static bool ColorEdit4(string label, ref Vector4 col);
    // public static bool ColorPicker3(string label, ref Vector3 col);
    // public static bool ColorPicker3(string label, ref Vector3 col, ImGuiColorEditFlags flags);
    // public static bool ColorPicker4(string label, ref Vector4 col);
    // public static bool ColorPicker4(string label, ref Vector4 col, ImGuiColorEditFlags flags, ref float ref_col);
    // public static bool ColorPicker4(string label, ref Vector4 col, ImGuiColorEditFlags flags);
    // public static void Columns(int count, string id, bool border);
    // public static void Columns(int count, string id);
    // public static void Columns(int count);
    // public static void Columns();
    // public static bool Combo(string label, ref int current_item, string items_separated_by_zeros, int popup_max_height_in_items);
    // public static bool Combo(string label, ref int current_item, string items_separated_by_zeros);
    // public static bool Combo(string label, ref int current_item, string[] items, int items_count, int popup_max_height_in_items);
    // public static bool Combo(string label, ref int current_item, string[] items, int items_count);
    // public static IntPtr CreateContext();
    // public static IntPtr CreateContext(ImFontAtlasPtr shared_font_atlas);
    // public static bool DebugCheckVersionAndDataLayout(string version_str, uint sz_io, uint sz_style, uint sz_vec2, uint sz_vec4, uint sz_drawvert, uint sz_drawidx);
    // public static void DestroyContext(IntPtr ctx);
    // public static void DestroyContext();
    // public static void DestroyPlatformWindows();
    // public static uint DockSpace(uint id, Vector2 size);
    // public static uint DockSpace(uint id);
    // public static uint DockSpace(uint id, Vector2 size, ImGuiDockNodeFlags flags);
    // public static uint DockSpace(uint id, Vector2 size, ImGuiDockNodeFlags flags, ImGuiWindowClassPtr window_class);
    // public static uint DockSpaceOverViewport();
    // public static uint DockSpaceOverViewport(ImGuiViewportPtr viewport);
    // public static uint DockSpaceOverViewport(ImGuiViewportPtr viewport, ImGuiDockNodeFlags flags);
    // public static uint DockSpaceOverViewport(ImGuiViewportPtr viewport, ImGuiDockNodeFlags flags, ImGuiWindowClassPtr window_class);
    // public static bool DragFloat(string label, ref float v);
    // public static bool DragFloat(string label, ref float v, float v_speed);
    // public static bool DragFloat(string label, ref float v, float v_speed, float v_min);
    // public static bool DragFloat(string label, ref float v, float v_speed, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragFloat(string label, ref float v, float v_speed, float v_min, float v_max, string format);
    // public static bool DragFloat(string label, ref float v, float v_speed, float v_min, float v_max);
    // public static bool DragFloat2(string label, ref Vector2 v, float v_speed, float v_min, float v_max, string format);
    // public static bool DragFloat2(string label, ref Vector2 v, float v_speed, float v_min, float v_max);
    // public static bool DragFloat2(string label, ref Vector2 v, float v_speed, float v_min);
    // public static bool DragFloat2(string label, ref Vector2 v, float v_speed);
    // public static bool DragFloat2(string label, ref Vector2 v);
    // public static bool DragFloat2(string label, ref Vector2 v, float v_speed, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragFloat3(string label, ref Vector3 v, float v_speed, float v_min, float v_max);
    // public static bool DragFloat3(string label, ref Vector3 v, float v_speed, float v_min);
    // public static bool DragFloat3(string label, ref Vector3 v, float v_speed);
    // public static bool DragFloat3(string label, ref Vector3 v);
    // public static bool DragFloat3(string label, ref Vector3 v, float v_speed, float v_min, float v_max, string format);
    // public static bool DragFloat3(string label, ref Vector3 v, float v_speed, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragFloat4(string label, ref Vector4 v);
    // public static bool DragFloat4(string label, ref Vector4 v, float v_speed);
    // public static bool DragFloat4(string label, ref Vector4 v, float v_speed, float v_min);
    // public static bool DragFloat4(string label, ref Vector4 v, float v_speed, float v_min, float v_max);
    // public static bool DragFloat4(string label, ref Vector4 v, float v_speed, float v_min, float v_max, string format);
    // public static bool DragFloat4(string label, ref Vector4 v, float v_speed, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max, float v_speed, float v_min, float v_max, string format);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max, float v_speed, float v_min, float v_max, string format, string format_max);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max, float v_speed, float v_min, float v_max, string format, string format_max, ImGuiSliderFlags flags);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max, float v_speed, float v_min);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max, float v_speed, float v_min, float v_max);
    // public static bool DragFloatRange2(string label, ref float v_current_min, ref float v_current_max, float v_speed);
    // public static bool DragInt(string label, ref int v, float v_speed, int v_min, int v_max);
    // public static bool DragInt(string label, ref int v, float v_speed, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragInt(string label, ref int v, float v_speed, int v_min, int v_max, string format);
    // public static bool DragInt(string label, ref int v, float v_speed, int v_min);
    // public static bool DragInt(string label, ref int v, float v_speed);
    // public static bool DragInt(string label, ref int v);
    // public static bool DragInt2(string label, ref int v, float v_speed, int v_min, int v_max);
    // public static bool DragInt2(string label, ref int v, float v_speed, int v_min);
    // public static bool DragInt2(string label, ref int v, float v_speed);
    // public static bool DragInt2(string label, ref int v);
    // public static bool DragInt2(string label, ref int v, float v_speed, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragInt2(string label, ref int v, float v_speed, int v_min, int v_max, string format);
    // public static bool DragInt3(string label, ref int v, float v_speed, int v_min);
    // public static bool DragInt3(string label, ref int v);
    // public static bool DragInt3(string label, ref int v, float v_speed);
    // public static bool DragInt3(string label, ref int v, float v_speed, int v_min, int v_max);
    // public static bool DragInt3(string label, ref int v, float v_speed, int v_min, int v_max, string format);
    // public static bool DragInt3(string label, ref int v, float v_speed, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragInt4(string label, ref int v, float v_speed, int v_min, int v_max);
    // public static bool DragInt4(string label, ref int v);
    // public static bool DragInt4(string label, ref int v, float v_speed);
    // public static bool DragInt4(string label, ref int v, float v_speed, int v_min);
    // public static bool DragInt4(string label, ref int v, float v_speed, int v_min, int v_max, string format);
    // public static bool DragInt4(string label, ref int v, float v_speed, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max, float v_speed);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max, float v_speed, int v_min);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max, float v_speed, int v_min, int v_max);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max, float v_speed, int v_min, int v_max, string format);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max, float v_speed, int v_min, int v_max, string format, string format_max);
    // public static bool DragIntRange2(string label, ref int v_current_min, ref int v_current_max, float v_speed, int v_min, int v_max, string format, string format_max, ImGuiSliderFlags flags);
    // public static bool DragScalar(string label, ImGuiDataType data_type, IntPtr p_data, float v_speed, IntPtr p_min, IntPtr p_max);
    // public static bool DragScalar(string label, ImGuiDataType data_type, IntPtr p_data, float v_speed, IntPtr p_min, IntPtr p_max, string format, ImGuiSliderFlags flags);
    // public static bool DragScalar(string label, ImGuiDataType data_type, IntPtr p_data);
    // public static bool DragScalar(string label, ImGuiDataType data_type, IntPtr p_data, float v_speed);
    // public static bool DragScalar(string label, ImGuiDataType data_type, IntPtr p_data, float v_speed, IntPtr p_min, IntPtr p_max, string format);
    // public static bool DragScalar(string label, ImGuiDataType data_type, IntPtr p_data, float v_speed, IntPtr p_min);
    // public static bool DragScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, float v_speed);
    // public static bool DragScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, float v_speed, IntPtr p_min, IntPtr p_max, string format, ImGuiSliderFlags flags);
    // public static bool DragScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, float v_speed, IntPtr p_min, IntPtr p_max);
    // public static bool DragScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, float v_speed, IntPtr p_min);
    // public static bool DragScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components);
    // public static bool DragScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, float v_speed, IntPtr p_min, IntPtr p_max, string format);
    // public static void Dummy(Vector2 size);
    public static void End(){
        ImGui.End();
    }
    // public static void EndChild();
    // public static void EndChildFrame();
    // public static void EndCombo();
    // public static void EndDragDropSource();
    // public static void EndDragDropTarget();
    // public static void EndFrame();
    // public static void EndGroup();
    // public static void EndListBox();
    // public static void EndMainMenuBar();
    // public static void EndMenu();
    // public static void EndMenuBar();
    // public static void EndPopup();
    // public static void EndTabBar();
    // public static void EndTabItem();
    // public static void EndTable();
    // public static void EndTooltip();
    // public static ImGuiViewportPtr FindViewportByID(uint id);
    // public static ImGuiViewportPtr FindViewportByPlatformHandle(IntPtr platform_handle);
    // public static void GetAllocatorFunctions(ref IntPtr p_alloc_func, ref IntPtr p_free_func, ref void* p_user_data);
    // public static ImDrawListPtr GetBackgroundDrawList();
    // public static ImDrawListPtr GetBackgroundDrawList(ImGuiViewportPtr viewport);
    // public static IntPtr* GetBuilderForFreeType();
    // public static string GetClipboardText();
    // public static uint GetColorU32(uint col);
    // public static uint GetColorU32(Vector4 col);
    // public static uint GetColorU32(ImGuiCol idx, float alpha_mul);
    // public static uint GetColorU32(ImGuiCol idx);
    // public static int GetColumnIndex();
    // public static float GetColumnOffset(int column_index);
    // public static float GetColumnOffset();
    // public static int GetColumnsCount();
    // public static float GetColumnWidth();
    // public static float GetColumnWidth(int column_index);
    // public static Vector2 GetContentRegionAvail();
    // public static Vector2 GetContentRegionMax();
    // public static IntPtr GetCurrentContext();
    // public static Vector2 GetCursorPos();
    // public static float GetCursorPosX();
    // public static float GetCursorPosY();
    // public static Vector2 GetCursorScreenPos();
    // public static Vector2 GetCursorStartPos();
    // public static ImGuiPayloadPtr GetDragDropPayload();
    // public static ImDrawDataPtr GetDrawData();
    // public static IntPtr GetDrawListSharedData();
    // public static ImFontPtr GetFont();
    // public static float GetFontSize();
    // public static Vector2 GetFontTexUvWhitePixel();
    // public static ImDrawListPtr GetForegroundDrawList(ImGuiViewportPtr viewport);
    // public static ImDrawListPtr GetForegroundDrawList();
    // public static int GetFrameCount();
    // public static float GetFrameHeight();
    // public static float GetFrameHeightWithSpacing();
    // public static uint GetID(string str_id);
    // public static uint GetID(IntPtr ptr_id);
    // public static ImGuiIOPtr GetIO();
    // public static Vector2 GetItemRectMax();
    // public static Vector2 GetItemRectMin();
    // public static Vector2 GetItemRectSize();
    // public static int GetKeyIndex(ImGuiKey imgui_key);
    // public static int GetKeyPressedAmount(int key_index, float repeat_delay, float rate);
    // public static ImGuiViewportPtr GetMainViewport();
    // public static ImGuiMouseCursor GetMouseCursor();
    // public static Vector2 GetMouseDragDelta(ImGuiMouseButton button);
    // public static Vector2 GetMouseDragDelta(ImGuiMouseButton button, float lock_threshold);
    // public static Vector2 GetMouseDragDelta();
    // public static Vector2 GetMousePos();
    // public static Vector2 GetMousePosOnOpeningCurrentPopup();
    // public static ImGuiPlatformIOPtr GetPlatformIO();
    // public static float GetScrollMaxX();
    // public static float GetScrollMaxY();
    // public static float GetScrollX();
    // public static float GetScrollY();
    // public static ImGuiStoragePtr GetStateStorage();
    // public static ImGuiStylePtr GetStyle();
    // public static string GetStyleColorName(ImGuiCol idx);
    // public static Vector4* GetStyleColorVec4(ImGuiCol idx);
    // public static float GetTextLineHeight();
    // public static float GetTextLineHeightWithSpacing();
    // public static double GetTime();
    // public static float GetTreeNodeToLabelSpacing();
    // public static string GetVersion();
    // public static Vector2 GetWindowContentRegionMax();
    // public static Vector2 GetWindowContentRegionMin();
    // public static float GetWindowContentRegionWidth();
    // public static uint GetWindowDockID();
    // public static float GetWindowDpiScale();
    // public static ImDrawListPtr GetWindowDrawList();
    // public static float GetWindowHeight();
    // public static Vector2 GetWindowPos();
    // public static Vector2 GetWindowSize();
    // public static ImGuiViewportPtr GetWindowViewport();
    // public static float GetWindowWidth();
    // public static void Image(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1, Vector4 tint_col, Vector4 border_col);
    // public static void Image(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1, Vector4 tint_col);
    // public static void Image(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1);
    // public static void Image(IntPtr user_texture_id, Vector2 size, Vector2 uv0);
    // public static void Image(IntPtr user_texture_id, Vector2 size);
    // public static bool ImageButton(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1, int frame_padding, Vector4 bg_col, Vector4 tint_col);
    // public static bool ImageButton(IntPtr user_texture_id, Vector2 size);
    // public static bool ImageButton(IntPtr user_texture_id, Vector2 size, Vector2 uv0);
    // public static bool ImageButton(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1);
    // public static bool ImageButton(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1, int frame_padding);
    // public static bool ImageButton(IntPtr user_texture_id, Vector2 size, Vector2 uv0, Vector2 uv1, int frame_padding, Vector4 bg_col);
    public static void Indent(){
        ImGui.Indent();
    }
    public static void Indent(float indent_w){
        ImGui.Indent(indent_w);
    }
    // public static bool InputDouble(string label, ref double v, double step, double step_fast, string format, ImGuiInputTextFlags flags);
    // public static bool InputDouble(string label, ref double v);
    // public static bool InputDouble(string label, ref double v, double step);
    // public static bool InputDouble(string label, ref double v, double step, double step_fast);
    // public static bool InputDouble(string label, ref double v, double step, double step_fast, string format);
    // public static bool InputFloat(string label, ref float v, float step);
    // public static bool InputFloat(string label, ref float v);
    // public static bool InputFloat(string label, ref float v, float step, float step_fast);
    // public static bool InputFloat(string label, ref float v, float step, float step_fast, string format);
    // public static bool InputFloat(string label, ref float v, float step, float step_fast, string format, ImGuiInputTextFlags flags);
    // public static bool InputFloat2(string label, ref Vector2 v);
    // public static bool InputFloat2(string label, ref Vector2 v, string format);
    // public static bool InputFloat2(string label, ref Vector2 v, string format, ImGuiInputTextFlags flags);
    // public static bool InputFloat3(string label, ref Vector3 v);
    // public static bool InputFloat3(string label, ref Vector3 v, string format);
    // public static bool InputFloat3(string label, ref Vector3 v, string format, ImGuiInputTextFlags flags);
    // public static bool InputFloat4(string label, ref Vector4 v, string format, ImGuiInputTextFlags flags);
    // public static bool InputFloat4(string label, ref Vector4 v);
    // public static bool InputFloat4(string label, ref Vector4 v, string format);
    // public static bool InputInt(string label, ref int v, int step);
    // public static bool InputInt(string label, ref int v);
    // public static bool InputInt(string label, ref int v, int step, int step_fast);
    // public static bool InputInt(string label, ref int v, int step, int step_fast, ImGuiInputTextFlags flags);
    // public static bool InputInt2(string label, ref int v);
    // public static bool InputInt2(string label, ref int v, ImGuiInputTextFlags flags);
    // public static bool InputInt3(string label, ref int v);
    // public static bool InputInt3(string label, ref int v, ImGuiInputTextFlags flags);
    // public static bool InputInt4(string label, ref int v);
    // public static bool InputInt4(string label, ref int v, ImGuiInputTextFlags flags);
    // public static bool InputScalar(string label, ImGuiDataType data_type, IntPtr p_data);
    // public static bool InputScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_step);
    // public static bool InputScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_step, IntPtr p_step_fast, string format, ImGuiInputTextFlags flags);
    // public static bool InputScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_step, IntPtr p_step_fast);
    // public static bool InputScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_step, IntPtr p_step_fast, string format);
    // public static bool InputScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components);
    // public static bool InputScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_step);
    // public static bool InputScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_step, IntPtr p_step_fast);
    // public static bool InputScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_step, IntPtr p_step_fast, string format);
    // public static bool InputScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_step, IntPtr p_step_fast, string format, ImGuiInputTextFlags flags);
    
    public static bool InputText(string label, byte[] buf, uint buf_size){
        return ImGui.InputText(label, buf,buf_size);
    }
    public static bool InputText(string label, ref string input, uint maxLength, ImGuiInputTextFlags flags){
        return ImGui.InputText(label, ref input, maxLength, flags);
    }
    // public static bool InputText(string label, ref string input, uint maxLength, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback, IntPtr user_data)
    // {

    //     return ImGui.InputText(label, ref input, maxLength, flags, callback, user_data);
    // }
    public static bool InputText(string label, ref string input, uint maxLength){
        return ImGui.InputText(label, ref input, maxLength);
    }
    //public static bool InputText(string label, ref string input, uint maxLength, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback);
    public static bool InputText(string label, IntPtr buf, uint buf_size, ImGuiInputTextFlags flags){
        return ImGui.InputText(label, buf,buf_size,flags);
    }
    public static bool InputText(string label, IntPtr buf, uint buf_size){
        return ImGui.InputText(label, buf,buf_size);
    }
    //public static bool InputText(string label, byte[] buf, uint buf_size, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback);
    //public static bool InputText(string label, byte[] buf, uint buf_size, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback, IntPtr user_data);
    //public static bool InputText(string label, IntPtr buf, uint buf_size, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback, IntPtr user_data);
    //public static bool InputText(string label, IntPtr buf, uint buf_size, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback);
    public static bool InputText(string label, byte[] buf, uint buf_size, ImGuiInputTextFlags flags){
        return ImGui.InputText(label, buf,buf_size,flags);
    }
    //public static bool InputTextMultiline(string label, ref string input, uint maxLength, Vector2 size, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback, IntPtr user_data);
    //public static bool InputTextMultiline(string label, ref string input, uint maxLength, Vector2 size, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback);
    public static bool InputTextMultiline(string label, ref string input, uint maxLength, Vector2 size, ImGuiInputTextFlags flags){
        return ImGui.InputTextMultiline(label,ref input,maxLength,size,flags);
    }
    public static bool InputTextMultiline(string label, ref string input, uint maxLength, Vector2 size){
        return ImGui.InputTextMultiline(label,ref input,maxLength,size);
    }
    // public static bool InputTextWithHint(string label, string hint, ref string input, uint maxLength, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback, IntPtr user_data);
    // public static bool InputTextWithHint(string label, string hint, ref string input, uint maxLength, ImGuiInputTextFlags flags, ImGuiInputTextCallback callback);
    // public static bool InputTextWithHint(string label, string hint, ref string input, uint maxLength, ImGuiInputTextFlags flags);
    // public static bool InputTextWithHint(string label, string hint, ref string input, uint maxLength);
    // public static bool InvisibleButton(string str_id, Vector2 size, ImGuiButtonFlags flags);
    // public static bool InvisibleButton(string str_id, Vector2 size);
    // public static bool IsAnyItemActive();
    // public static bool IsAnyItemFocused();
    // public static bool IsAnyItemHovered();
    // public static bool IsAnyMouseDown();
    // public static bool IsItemActivated();
    // public static bool IsItemActive();
    // public static bool IsItemClicked();
    // public static bool IsItemClicked(ImGuiMouseButton mouse_button);
    // public static bool IsItemDeactivated();
    // public static bool IsItemDeactivatedAfterEdit();
    // public static bool IsItemEdited();
    // public static bool IsItemFocused();
    // public static bool IsItemHovered();
    // public static bool IsItemHovered(ImGuiHoveredFlags flags);
    // public static bool IsItemToggledOpen();
    // public static bool IsItemVisible();
    // public static bool IsKeyDown(int user_key_index);
    // public static bool IsKeyPressed(int user_key_index, bool repeat);
    // public static bool IsKeyPressed(int user_key_index);
    // public static bool IsKeyReleased(int user_key_index);
    // public static bool IsMouseClicked(ImGuiMouseButton button, bool repeat);
    // public static bool IsMouseClicked(ImGuiMouseButton button);
    // public static bool IsMouseDoubleClicked(ImGuiMouseButton button);
    // public static bool IsMouseDown(ImGuiMouseButton button);
    // public static bool IsMouseDragging(ImGuiMouseButton button, float lock_threshold);
    // public static bool IsMouseDragging(ImGuiMouseButton button);
    // public static bool IsMouseHoveringRect(Vector2 r_min, Vector2 r_max, bool clip);
    // public static bool IsMouseHoveringRect(Vector2 r_min, Vector2 r_max);
    // public static bool IsMousePosValid(ref Vector2 mouse_pos);
    // public static bool IsMousePosValid();
    // public static bool IsMouseReleased(ImGuiMouseButton button);
    // public static bool IsPopupOpen(string str_id, ImGuiPopupFlags flags);
    // public static bool IsPopupOpen(string str_id);
    // public static bool IsRectVisible(Vector2 size);
    // public static bool IsRectVisible(Vector2 rect_min, Vector2 rect_max);
    // public static bool IsWindowAppearing();
    // public static bool IsWindowCollapsed();
    // public static bool IsWindowDocked();
    // public static bool IsWindowFocused();
    // public static bool IsWindowFocused(ImGuiFocusedFlags flags);
    // public static bool IsWindowHovered(ImGuiHoveredFlags flags);
    // public static bool IsWindowHovered();
    // public static void LabelText(string label, string fmt);
    // public static bool ListBox(string label, ref int current_item, string[] items, int items_count, int height_in_items);
    // public static bool ListBox(string label, ref int current_item, string[] items, int items_count);
    // public static void LoadIniSettingsFromDisk(string ini_filename);
    // public static void LoadIniSettingsFromMemory(string ini_data, uint ini_size);
    // public static void LoadIniSettingsFromMemory(string ini_data);
    // public static void LogButtons();
    // public static void LogFinish();
    // public static void LogText(string fmt);
    // public static void LogToClipboard(int auto_open_depth);
    // public static void LogToClipboard();
    // public static void LogToFile(int auto_open_depth, string filename);
    // public static void LogToFile(int auto_open_depth);
    // public static void LogToFile();
    // public static void LogToTTY(int auto_open_depth);
    // public static void LogToTTY();
    // public static IntPtr MemAlloc(uint size);
    // public static void MemFree(IntPtr ptr);
    public static bool MenuItem(string label, bool enabled){
        return ImGui.MenuItem(label,enabled);
    }
    public static bool MenuItem(string label, string shortcut, bool selected){
        return ImGui.MenuItem(label,shortcut,selected);
    }
    public static bool MenuItem(string label, string shortcut, ref bool p_selected){
        return ImGui.MenuItem(label,shortcut,ref p_selected);
    }
    public static bool MenuItem(string label, string shortcut, ref bool p_selected, bool enabled){
        return ImGui.MenuItem(label,shortcut,ref p_selected,enabled);
    }
    public static bool MenuItem(string label){
        return ImGui.MenuItem(label);
    }
    public static bool MenuItem(string label, string shortcut){
        return ImGui.MenuItem(label,shortcut);
    }
    public static bool MenuItem(string label, string shortcut, bool selected, bool enabled){
        return ImGui.MenuItem(label,shortcut,selected,enabled);
    }
    // public static void NewFrame();
    // public static void NewLine();
    // public static void NextColumn();
    // public static void OpenPopup(string str_id);
    // public static void OpenPopup(string str_id, ImGuiPopupFlags popup_flags);
    // public static void OpenPopup(uint id);
    // public static void OpenPopup(uint id, ImGuiPopupFlags popup_flags);
    // public static void OpenPopupOnItemClick();
    // public static void OpenPopupOnItemClick(string str_id);
    // public static void OpenPopupOnItemClick(string str_id, ImGuiPopupFlags popup_flags);
    // public static void PlotHistogram(string label, ref float values, int values_count, int values_offset, string overlay_text);
    // public static void PlotHistogram(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min);
    // public static void PlotHistogram(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min, float scale_max);
    // public static void PlotHistogram(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min, float scale_max, Vector2 graph_size);
    // public static void PlotHistogram(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min, float scale_max, Vector2 graph_size, int stride);
    // public static void PlotHistogram(string label, ref float values, int values_count);
    // public static void PlotHistogram(string label, ref float values, int values_count, int values_offset);
    // public static void PlotLines(string label, ref float values, int values_count);
    // public static void PlotLines(string label, ref float values, int values_count, int values_offset);
    // public static void PlotLines(string label, ref float values, int values_count, int values_offset, string overlay_text);
    // public static void PlotLines(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min);
    // public static void PlotLines(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min, float scale_max);
    // public static void PlotLines(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min, float scale_max, Vector2 graph_size);
    // public static void PlotLines(string label, ref float values, int values_count, int values_offset, string overlay_text, float scale_min, float scale_max, Vector2 graph_size, int stride);
    // public static void PopAllowKeyboardFocus();
    // public static void PopButtonRepeat();
    // public static void PopClipRect();
    // public static void PopFont();
    // public static void PopID();
    // public static void PopItemWidth();
    // public static void PopStyleColor(int count);
    // public static void PopStyleColor();
    // public static void PopStyleVar(int count);
    // public static void PopStyleVar();
    // public static void PopTextWrapPos();
    // public static void ProgressBar(float fraction);
    // public static void ProgressBar(float fraction, Vector2 size_arg, string overlay);
    // public static void ProgressBar(float fraction, Vector2 size_arg);
    // public static void PushAllowKeyboardFocus(bool allow_keyboard_focus);
    // public static void PushButtonRepeat(bool repeat);
    // public static void PushClipRect(Vector2 clip_rect_min, Vector2 clip_rect_max, bool intersect_with_current_clip_rect);
    // public static void PushFont(ImFontPtr font);
    // public static void PushID(IntPtr ptr_id);
    // public static void PushID(string str_id);
    // public static void PushID(int int_id);
    // public static void PushItemWidth(float item_width);
    // public static void PushStyleColor(ImGuiCol idx, Vector4 col);
    // public static void PushStyleColor(ImGuiCol idx, uint col);
    // public static void PushStyleVar(ImGuiStyleVar idx, Vector2 val);
    // public static void PushStyleVar(ImGuiStyleVar idx, float val);
    // public static void PushTextWrapPos();
    // public static void PushTextWrapPos(float wrap_local_pos_x);
    // public static bool RadioButton(string label, bool active);
    // public static bool RadioButton(string label, ref int v, int v_button);
    // public static void Render();
    // public static void RenderPlatformWindowsDefault(IntPtr platform_render_arg);
    // public static void RenderPlatformWindowsDefault();
    // public static void RenderPlatformWindowsDefault(IntPtr platform_render_arg, IntPtr renderer_render_arg);
    // public static void ResetMouseDragDelta(ImGuiMouseButton button);
    // public static void ResetMouseDragDelta();
    public static void SameLine(float offset_from_start_x, float spacing){
        ImGui.SameLine(offset_from_start_x,spacing);
    }
    public static void SameLine(float offset_from_start_x){
        ImGui.SameLine(offset_from_start_x);
    }
    public static void SameLine(){
        ImGui.SameLine();
    }
    // public static void SaveIniSettingsToDisk(string ini_filename);
    // public static string SaveIniSettingsToMemory();
    // public static string SaveIniSettingsToMemory(out uint out_ini_size);
    // public static bool Selectable(string label);
    // public static bool Selectable(string label, bool selected);
    // public static bool Selectable(string label, bool selected, ImGuiSelectableFlags flags);
    // public static bool Selectable(string label, bool selected, ImGuiSelectableFlags flags, Vector2 size);
    // public static bool Selectable(string label, ref bool p_selected);
    // public static bool Selectable(string label, ref bool p_selected, ImGuiSelectableFlags flags);
    // public static bool Selectable(string label, ref bool p_selected, ImGuiSelectableFlags flags, Vector2 size);
    public static void Separator(){
        ImGui.Separator();
    }
    // public static void SetAllocatorFunctions(IntPtr alloc_func, IntPtr free_func);
    // public static void SetAllocatorFunctions(IntPtr alloc_func, IntPtr free_func, IntPtr user_data);
    // public static void SetClipboardText(string text);
    // public static void SetColorEditOptions(ImGuiColorEditFlags flags);
    // public static void SetColumnOffset(int column_index, float offset_x);
    // public static void SetColumnWidth(int column_index, float width);
    // public static void SetCurrentContext(IntPtr ctx);
    // public static void SetCursorPos(Vector2 local_pos);
    // public static void SetCursorPosX(float local_x);
    // public static void SetCursorPosY(float local_y);
    // public static void SetCursorScreenPos(Vector2 pos);
    // public static bool SetDragDropPayload(string type, IntPtr data, uint sz);
    // public static bool SetDragDropPayload(string type, IntPtr data, uint sz, ImGuiCond cond);
    // public static void SetItemAllowOverlap();
    // public static void SetItemDefaultFocus();
    // public static void SetKeyboardFocusHere();
    // public static void SetKeyboardFocusHere(int offset);
    // public static void SetMouseCursor(ImGuiMouseCursor cursor_type);
    // public static void SetNextItemOpen(bool is_open);
    // public static void SetNextItemOpen(bool is_open, ImGuiCond cond);
    // public static void SetNextItemWidth(float item_width);
    // public static void SetNextWindowBgAlpha(float alpha);
    // public static void SetNextWindowClass(ImGuiWindowClassPtr window_class);
    // public static void SetNextWindowCollapsed(bool collapsed);
    // public static void SetNextWindowCollapsed(bool collapsed, ImGuiCond cond);
    // public static void SetNextWindowContentSize(Vector2 size);
    // public static void SetNextWindowDockID(uint dock_id);
    // public static void SetNextWindowDockID(uint dock_id, ImGuiCond cond);
    // public static void SetNextWindowFocus();
    // public static void SetNextWindowPos(Vector2 pos, ImGuiCond cond);
    // public static void SetNextWindowPos(Vector2 pos);
    // public static void SetNextWindowPos(Vector2 pos, ImGuiCond cond, Vector2 pivot);
    // public static void SetNextWindowSize(Vector2 size);
    // public static void SetNextWindowSize(Vector2 size, ImGuiCond cond);
    // public static void SetNextWindowSizeConstraints(Vector2 size_min, Vector2 size_max);
    // public static void SetNextWindowSizeConstraints(Vector2 size_min, Vector2 size_max, ImGuiSizeCallback custom_callback);
    // public static void SetNextWindowSizeConstraints(Vector2 size_min, Vector2 size_max, ImGuiSizeCallback custom_callback, IntPtr custom_callback_data);
    // public static void SetNextWindowViewport(uint viewport_id);
    // public static void SetScrollFromPosX(float local_x);
    // public static void SetScrollFromPosX(float local_x, float center_x_ratio);
    // public static void SetScrollFromPosY(float local_y);
    // public static void SetScrollFromPosY(float local_y, float center_y_ratio);
    // public static void SetScrollHereX();
    // public static void SetScrollHereX(float center_x_ratio);
    // public static void SetScrollHereY();
    // public static void SetScrollHereY(float center_y_ratio);
    // public static void SetScrollX(float scroll_x);
    // public static void SetScrollY(float scroll_y);
    // public static void SetStateStorage(ImGuiStoragePtr storage);
    // public static void SetTabItemClosed(string tab_or_docked_window_label);
    // public static void SetTooltip(string fmt);
    // public static void SetWindowCollapsed(bool collapsed);
    // public static void SetWindowCollapsed(bool collapsed, ImGuiCond cond);
    // public static void SetWindowCollapsed(string name, bool collapsed);
    // public static void SetWindowCollapsed(string name, bool collapsed, ImGuiCond cond);
    // public static void SetWindowFocus();
    // public static void SetWindowFocus(string name);
    // public static void SetWindowFontScale(float scale);
    // public static void SetWindowPos(Vector2 pos);
    // public static void SetWindowPos(Vector2 pos, ImGuiCond cond);
    // public static void SetWindowPos(string name, Vector2 pos);
    // public static void SetWindowPos(string name, Vector2 pos, ImGuiCond cond);
    // public static void SetWindowSize(Vector2 size);
    // public static void SetWindowSize(Vector2 size, ImGuiCond cond);
    // public static void SetWindowSize(string name, Vector2 size);
    // public static void SetWindowSize(string name, Vector2 size, ImGuiCond cond);
    // public static void ShowAboutWindow();
    // public static void ShowAboutWindow(ref bool p_open);
    public static void ShowDemoWindow(ref bool p_open){
        ImGui.ShowDemoWindow(ref p_open);
    }
    public static void ShowDemoWindow(){
        ImGui.ShowDemoWindow();
    }
    // public static void ShowFontSelector(string label);
    // public static void ShowMetricsWindow();
    // public static void ShowMetricsWindow(ref bool p_open);
    // public static void ShowStyleEditor();
    // public static void ShowStyleEditor(ImGuiStylePtr @ref);
    // public static bool ShowStyleSelector(string label);
    // public static void ShowUserGuide();
    // public static bool SliderAngle(string label, ref float v_rad);
    // public static bool SliderAngle(string label, ref float v_rad, float v_degrees_min);
    // public static bool SliderAngle(string label, ref float v_rad, float v_degrees_min, float v_degrees_max);
    // public static bool SliderAngle(string label, ref float v_rad, float v_degrees_min, float v_degrees_max, string format);
    // public static bool SliderAngle(string label, ref float v_rad, float v_degrees_min, float v_degrees_max, string format, ImGuiSliderFlags flags);
    public static bool SliderFloat(string label, ref float v, float v_min, float v_max, string format, ImGuiSliderFlags flags){
        return ImGui.SliderFloat(label,ref v,v_min,v_max,format,flags);
    }
    public static bool SliderFloat(string label, ref float v, float v_min, float v_max){
        return ImGui.SliderFloat(label,ref v,v_min,v_max);
    }
    public static bool SliderFloat(string label, ref float v, float v_min, float v_max, string format){
        return ImGui.SliderFloat(label,ref v,v_min,v_max,format);
    }
    // public static bool SliderFloat2(string label, ref Vector2 v, float v_min, float v_max);
    // public static bool SliderFloat2(string label, ref Vector2 v, float v_min, float v_max, string format);
    // public static bool SliderFloat2(string label, ref Vector2 v, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderFloat3(string label, ref Vector3 v, float v_min, float v_max);
    // public static bool SliderFloat3(string label, ref Vector3 v, float v_min, float v_max, string format);
    // public static bool SliderFloat3(string label, ref Vector3 v, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderFloat4(string label, ref Vector4 v, float v_min, float v_max);
    // public static bool SliderFloat4(string label, ref Vector4 v, float v_min, float v_max, string format);
    // public static bool SliderFloat4(string label, ref Vector4 v, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderInt(string label, ref int v, int v_min, int v_max, string format);
    // public static bool SliderInt(string label, ref int v, int v_min, int v_max);
    // public static bool SliderInt(string label, ref int v, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderInt2(string label, ref int v, int v_min, int v_max, string format);
    // public static bool SliderInt2(string label, ref int v, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderInt2(string label, ref int v, int v_min, int v_max);
    // public static bool SliderInt3(string label, ref int v, int v_min, int v_max);
    // public static bool SliderInt3(string label, ref int v, int v_min, int v_max, string format);
    // public static bool SliderInt3(string label, ref int v, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderInt4(string label, ref int v, int v_min, int v_max, string format);
    // public static bool SliderInt4(string label, ref int v, int v_min, int v_max);
    // public static bool SliderInt4(string label, ref int v, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_min, IntPtr p_max);
    // public static bool SliderScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_min, IntPtr p_max, string format);
    // public static bool SliderScalar(string label, ImGuiDataType data_type, IntPtr p_data, IntPtr p_min, IntPtr p_max, string format, ImGuiSliderFlags flags);
    // public static bool SliderScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_min, IntPtr p_max);
    // public static bool SliderScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_min, IntPtr p_max, string format);
    // public static bool SliderScalarN(string label, ImGuiDataType data_type, IntPtr p_data, int components, IntPtr p_min, IntPtr p_max, string format, ImGuiSliderFlags flags);
    public static bool SmallButton(string label){
        return ImGui.SmallButton(label);
    }
    public static void Spacing(){
        ImGui.Spacing();
    }
    //public static void StyleColorsClassic(ImGuiStylePtr dst);
    public static void StyleColorsClassic(){
        ImGui.StyleColorsClassic();
    }
    //public static void StyleColorsDark(ImGuiStylePtr dst);
    public static void StyleColorsDark(){
        ImGui.StyleColorsDark();
    }
    public static void StyleColorsLight(){
        ImGui.StyleColorsLight();
    }
    //public static void StyleColorsLight(ImGuiStylePtr dst);
    // public static bool TabItemButton(string label, ImGuiTabItemFlags flags);
    // public static bool TabItemButton(string label);
    // public static int TableGetColumnCount();
    // public static ImGuiTableColumnFlags TableGetColumnFlags();
    // public static ImGuiTableColumnFlags TableGetColumnFlags(int column_n);
    // public static int TableGetColumnIndex();
    // public static string TableGetColumnName(int column_n);
    // public static string TableGetColumnName();
    // public static int TableGetRowIndex();
    // public static ImGuiTableSortSpecsPtr TableGetSortSpecs();
    // public static void TableHeader(string label);
    // public static void TableHeadersRow();
    // public static bool TableNextColumn();
    // public static void TableNextRow();
    // public static void TableNextRow(ImGuiTableRowFlags row_flags, float min_row_height);
    // public static void TableNextRow(ImGuiTableRowFlags row_flags);
    // public static void TableSetBgColor(ImGuiTableBgTarget target, uint color, int column_n);
    // public static void TableSetBgColor(ImGuiTableBgTarget target, uint color);
    // public static void TableSetColumnEnabled(int column_n, bool v);
    // public static bool TableSetColumnIndex(int column_n);
    // public static void TableSetupColumn(string label, ImGuiTableColumnFlags flags, float init_width_or_weight);
    // public static void TableSetupColumn(string label);
    // public static void TableSetupColumn(string label, ImGuiTableColumnFlags flags);
    // public static void TableSetupColumn(string label, ImGuiTableColumnFlags flags, float init_width_or_weight, uint user_id);
    // public static void TableSetupScrollFreeze(int cols, int rows);
    public static void Text(string fmt)
    {
        ImGui.Text(fmt);
    }
    public static void TextColored(Vector4 col, string fmt){
        ImGui.TextColored(col,fmt);
    }
    // public static void TextDisabled(string fmt);
    // public static void TextUnformatted(string text);
    // public static void TextWrapped(string fmt);
    // public static bool TreeNode(IntPtr ptr_id, string fmt);
    // public static bool TreeNode(string label);
    // public static bool TreeNode(string str_id, string fmt);
    // public static bool TreeNodeEx(string label);
    // public static bool TreeNodeEx(string label, ImGuiTreeNodeFlags flags);
    // public static bool TreeNodeEx(string str_id, ImGuiTreeNodeFlags flags, string fmt);
    // public static bool TreeNodeEx(IntPtr ptr_id, ImGuiTreeNodeFlags flags, string fmt);
    // public static void TreePop();
    // public static void TreePush(string str_id);
    // public static void TreePush(IntPtr ptr_id);
    // public static void TreePush();
    // public static void Unindent();
    // public static void Unindent(float indent_w);
    // public static void UpdatePlatformWindows();
    // public static void Value(string prefix, int v);
    // public static void Value(string prefix, uint v);
    // public static void Value(string prefix, float v, string float_format);
    // public static void Value(string prefix, bool b);
    // public static void Value(string prefix, float v);
    // public static bool VSliderFloat(string label, Vector2 size, ref float v, float v_min, float v_max);
    // public static bool VSliderFloat(string label, Vector2 size, ref float v, float v_min, float v_max, string format);
    // public static bool VSliderFloat(string label, Vector2 size, ref float v, float v_min, float v_max, string format, ImGuiSliderFlags flags);
    // public static bool VSliderInt(string label, Vector2 size, ref int v, int v_min, int v_max);
    // public static bool VSliderInt(string label, Vector2 size, ref int v, int v_min, int v_max, string format);
    // public static bool VSliderInt(string label, Vector2 size, ref int v, int v_min, int v_max, string format, ImGuiSliderFlags flags);
    // public static bool VSliderScalar(string label, Vector2 size, ImGuiDataType data_type, IntPtr p_data, IntPtr p_min, IntPtr p_max);
    // public static bool VSliderScalar(string label, Vector2 size, ImGuiDataType data_type, IntPtr p_data, IntPtr p_min, IntPtr p_max, string format, ImGuiSliderFlags flags);
    // public static bool VSliderScalar(string label, Vector2 size, ImGuiDataType data_type, IntPtr p_data, IntPtr p_min, IntPtr p_max, string format);
}
